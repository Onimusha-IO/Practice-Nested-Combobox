import { useContext, useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

import client from "../client/client";
import config from "../../utils/config";
import ComboBox from "../ComboBox";
import { path } from "../../utils/rule";

// let options = [];
// if (i > 0 && data.inputValues[i - 1] === "Bizcocho") {
//   options = e.filter((e: any) => {
//     return e.name === "Blanco" || e.name === "Nuez";
//   });
// }

// if (counter === i) {
//   setCounter(counter + 1);
// }
// if (newValue === "" && counter > i) {
//   setCounter(counter - 1);
// }

const Combinations = () => {
  const [data, setData] = useState<any>();
  const [counter, setCounter] = useState(0);

  const combination = useSelector((state: any) => {
    return state.combination;
  });

  const getCombinations = async () => {
    try {
      const res = await client.get("/api/combinations", {
        headers: config.headers,
      });
      console.log("database response >> : ", res);

      const localData = {
        tables: ["Forma", "Masa", "Sabor", "Tamaño", "Crema", "Relleno", "Extra"],
        combinations: res.data,
      };

      setData(localData);
    } catch (error) {
      console.log("getCombinations error: ", error);
    }
  };

  useEffect(() => {
    getCombinations();

    console.log("combination ", combination);
  }, []);

  return (
    <>
      {data && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <Typography variant="body1" sx={{ paddingBottom: 10 }}>
            {combination}
          </Typography>
          {data.combinations.map((e: any, i: any) => {
            const key = nanoid();
            const options = path(combination, i).map((e) => {
              return { name: e };
            });
            return <ComboBox disabled={false} options={i === 0 ? e : options} label={data.tables[i]} index={i} key={key} />;
          })}
        </Box>
      )}
    </>
  );
};

export default Combinations;
