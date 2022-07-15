import pool from "../utils/database";

const getCombinations = async () => {
  const tables = [
    "forma",
    "masa",
    "sabor",
    "tamanio",
    "crema",
    "relleno",
    "extra",
  ];
  const combinations: string[][] = [];
  try {
    for await (const it of tables) {
      const res = await pool.query(`select * from ${it}`);
      combinations.push(res.rows);
    }

    return { succes: true, data: combinations, error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

export { getCombinations };
