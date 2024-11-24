// server/server.ts
import express from "express";
import * as Path2 from "node:path";

// server/routes/menu.ts
import { Router } from "express";

// server/db/connection.ts
import knex from "knex";

// server/db/knexfile.js
import * as Path from "node:path";
import * as URL from "node:url";
var __filename = URL.fileURLToPath(import.meta.url);
var __dirname = Path.dirname(__filename);
var knexfile_default = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: Path.join(__dirname, "dev.sqlite3")
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    }
  },
  useNullAsDefault: true,
  test: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: ":memory:"
    },
    migrations: {
      directory: Path.join(__dirname, "migrations")
    },
    seeds: {
      directory: Path.join(__dirname, "seeds")
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    }
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: Path.join(__dirname, "migrations")
    },
    seeds: {
      directory: Path.join(__dirname, "seeds")
    }
  }
};

// server/db/connection.ts
var env = process.env.NODE_ENV || "development";
var connection = knex(knexfile_default[env]);
var connection_default = connection;

// server/db/menu.ts
async function getAllMenus() {
  const menu = await connection_default("menu").select();
  return menu;
}

// server/routes/menu.ts
var router = Router();
router.get("/", async (req, res) => {
  try {
    const menu = await getAllMenus();
    res.json(menu);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});
var menu_default = router;

// server/routes/aboutMe.ts
import { Router as Router2 } from "express";

// server/db/aboutMe.ts
async function getAllAboutMeInfo() {
  const info = await connection_default("aboutMe").select();
  return info;
}

// server/routes/aboutMe.ts
var router2 = Router2();
router2.get("/", async (req, res) => {
  try {
    const info = await getAllAboutMeInfo();
    res.json(info);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});
var aboutMe_default = router2;

// server/routes/inventory.ts
import { Router as Router3 } from "express";

// server/db/inventory.ts
async function getAllSkills() {
  const info = await connection_default("skills").select();
  return info;
}
async function getSkillDetailsById(id) {
  const skillId = await connection_default("skills").where({ id }).first();
  return skillId;
}

// server/routes/inventory.ts
var router3 = Router3();
router3.get("/", async (req, res) => {
  try {
    const skill = await getAllSkills();
    res.json(skill);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});
router3.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const skill = await getSkillDetailsById(id);
    if (skill) {
      res.json(skill);
    } else {
      res.status(404).json({ message: "Skill not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});
var inventory_default = router3;

// server/routes/projects.ts
import { Router as Router4 } from "express";

// server/db/projects.ts
async function getAllProjects() {
  const project = await connection_default("projects").select();
  return project;
}

// server/routes/projects.ts
var router4 = Router4();
router4.get("/", async (req, res) => {
  try {
    const project = await getAllProjects();
    res.json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});
var projects_default = router4;

// server/server.ts
var server = express();
server.use(express.json());
server.use("/api/v1/menus", menu_default);
server.use("/api/v1/aboutMe", aboutMe_default);
server.use("/api/v1/skills", inventory_default);
server.use("/api/v1/projects", projects_default);
if (process.env.NODE_ENV === "production") {
  server.use(express.static(Path2.resolve("public")));
  server.use("/assets", express.static(Path2.resolve("./dist/assets")));
  server.get("*", (req, res) => {
    res.sendFile(Path2.resolve("./dist/index.html"));
  });
}
var server_default = server;

// server/index.ts
var port = process.env.PORT || 3e3;
server_default.listen(port, () => {
  console.log(`listening on port ${port}`);
});
