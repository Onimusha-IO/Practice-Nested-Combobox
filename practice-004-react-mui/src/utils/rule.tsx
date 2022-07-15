export const rule = (A: string, B: string, subset: number) => {
  // ---------- shape ----------
  if ("Cuadrada") {
    return { table: [true, true, false, false], next: true };
  }

  // ---------- shape & dough ----------

  if ("Cuadrada" && "Bizcocho") {
    return { table: [true, false, true], subset: 1, next: true };
  }

  if ("Cuadrada" && "Hoja") {
    return { table: [true, false, false], subset: 2, next: true };
  }
  // ---------- dough & flavor ----------
  if ("Bizcocho" && "Blanco") {
    return { table: [false, true, true, true, true, true, true], next: true };
  }

  if ("Bizcocho" && "Nuez") {
    return { table: [false, true, true, true, true, true, true], next: true };
  }

  // ---------- flavor & cuantity ----------
  if (
    ("Blanco" && "12") ||
    ("Blanco" && "18") ||
    ("Blanco" && "24") ||
    ("Blanco" && "30") ||
    ("Blanco" && "40") ||
    ("Blanco" && "50")
  ) {
    if (subset === 1) {
      return {
        table: [false, false, true, true, true, true, false, true, true, false, true, true, true, true, false],
        next: true,
      };
    }

    if (subset === 2) {
      return {
        table: [false, true, true, true, true, true, true, true, true, true, true, true, true, true, false],
        next: true,
      };
    }
  }

  if (("Nuez" && "12") || ("Nuez" && "18") || ("Nuez" && "24") || ("Nuez" && "30") || ("Nuez" && "40") || ("Nuez" && "50")) {
    return {
      table: [false, false, true, false, false, false, false, false, false, false, false, false, false, false, false],
      next: true,
    };
  }

  // ---------- quantity & cream ----------
  if (
    ("Crema con Lúcuma" && ("12" || "18" || "24" || "30" || "40" || "50")) ||
    ("Crema con Maracuya" && ("12" || "18" || "24" || "30" || "40" || "50")) ||
    ("Crema con Mokka" && ("12" || "18" || "24" || "30" || "40" || "50")) ||
    ("Crema con Naranja " && ("12" || "18" || "24" || "30" || "40" || "50")) ||
    ("Crema y Durazno" && ("12" || "18" || "24" || "30" || "40" || "50")) ||
    ("Crema y Frambuesa" && ("12" || "18" || "24" || "30" || "40" || "50")) ||
    ("Crema y Piña" && ("12" || "18" || "24" || "30" || "40" || "50")) ||
    ("Crema y Tropical" && ("12" || "18" || "24" || "30" || "40" || "50"))
  ) {
    return { table: [false, true, false, true], next: false };
  }

  if (
    ("Crema con Chocolate" && "12") ||
    ("Crema con Chocolate" && "18") ||
    ("Crema con Chocolate" && "24") ||
    ("Crema con Chocolate" && "30") ||
    ("Crema con Chocolate" && "40") ||
    ("Crema con Chocolate" && "50")
  ) {
    if (subset === 2) {
      return { table: [false, true, true, true], next: false };
    }
  }

  if (
    ("Crema con Trufa" && "12") ||
    ("Crema con Trufa" && "18") ||
    ("Crema con Trufa" && "24") ||
    ("Crema con Trufa" && "30") ||
    ("Crema con Trufa" && "40") ||
    ("Crema con Trufa" && "50")
  ) {
    if (subset === 2) {
      return { table: [false, true, true, true], next: false };
    }
  }

  if (
    ("Crema y Vainilla" && ("12" || "18" || "24" || "30" || "40" || "50")) ||
    ("Manjar Crema" && ("12" || "18" || "24" || "30" || "40" || "50"))
  ) {
    // ---------- quantity & cream ----------
    return { table: [true, false, false], next: false };
  }
};

// Path compuesto por secciones, que se agrean dependiendo de una condicion
// condiciones para path 1
/*
    path 1
    Si cuadrada >>>>> Bizcocho, hoja
    1  Si cuadrada y Bizcocho >>>>>>> Blanco, nuez
    2  Si cuadrada y Bizcocho y Blanco >>>>> 12, 18, 24, 30, 40, 50
    3  Si cuadrada y bizcocho y blanzo y [12 ~ || ~ 50] >>>>>> Lucuma, maracuya, mokka, naranja, durazno, frambuesa, pina, tropical, cremaVainilla, manjarCrema
    4  si cuadrada y bizcocho y blanco y [12 ~ || ~ 50] y [lucuma ~ || ~ tropical] >>>>>> manjar, vainilla
    si cuadrada y bizcocho y blanco y [12 ~ || ~ 50] y [lucuma ~ || ~ tropical] y manjar || vainilla >>>>>> return
    si cuadrada y bizcocho y blanco y [12 ~ || ~ 50] y cremaVainilla ~ || ~  manjarCrema >>>>>>> return 


    path 2
    Si cuadrada >>>>> Bizcocho, hoja
    1  Si cuadrada y Bizcocho >>>>>>> Blanco, nuez
    2  Si cuadrada y Bizcocho y nuez >>>>> [12, 18, 24, 30, 40, 50]
    3  Si cuadrada y bizcocho y nuez y [12 ~ || ~ 50] >>>>>> Lucuma
    4  si cuadrada y bizcocho y nuez y [12 ~ || ~ 50] y lucuma >>>>>>>>  manjar y vainilla
    si cuadrada y bizcocho y nuez y [12 ~ || ~ 50] y lucuma y  [manjar || vainilla] >>>>>>>> return

    path 3
    Si cuadrada >>>>> Bizcocho, hoja
    1  Si cuadrada y Hoja >>>>>>> Blanco
    2  Si cuadrada y Hoja y Blanco >>>>>>> [12, 18, 24, 30, 40, 50]
    3  Si cuadrada y Hoja y Blanco y [12 ~ || ~ 50] >>>>>>>> Crema con Chocolate, Lúcuma, Maracuya, Mokka, Naranja, Trufa, Durazno, Crema y Frambuesa, Crema y Nuez
                                                        Crema y Piña, Crema y Tropical, Crema y Vainilla, Manjar Crema
    4  Si cuadrada y Hoja y Blanco y [12 ~ || ~ 50] y [Chocolate ~ || ~ Tropical] >>>>>>  manjar, vainilla
    Si cuadrada y Hoja y Blanco y [12 ~ || ~ 50] y [Chocolate ~ || ~ Tropical] y  [manjar || vainilla] >>>>>> return
    Si cuadrada y Hoja y Blanco y [12 ~ || ~ 50] y [Crema y Vainilla ||  Manjar Crema] >>>>>>  return 
*/

export const path = (options: string[], index: number) => {
  console.log("path....");
  switch (index) {
    case 1:
      // subset 1 - 2 - 3
      if (options.includes("Cuadrada")) {
        return ["Bizcocho", "Hoja"];
      }
    case 2:
      // subset 1
      if (options.includes("Cuadrada") && options.includes("Bizcocho")) {
        return ["Blanco", "Nuez"];
      }

      // subset 2
      if (options.includes("Cuadrada") && options.includes("Hoja")) {
        return ["Blanco"];
      }
    case 3:
      // subset 1 - 2
      if (
        options.includes("Cuadrada") &&
        (options.includes("Bizcocho") || options.includes("Hoja")) &&
        (options.includes("Blanco") || options.includes("Nuez"))
      ) {
        return ["12", "18", "24", "30", "40", "50"];
      }

    case 4:
      // subset 1
      if (
        options.includes("Cuadrada") &&
        options.includes("Bizcocho") &&
        options.includes("Blanco") &&
        options.find((e) => {
          const int = parseInt(e);
          return int >= 12 && int <= 50;
        })
      ) {
        return [
          "Crema con Lúcuma",
          "Crema con Maracuya",
          "Crema con Mokka",
          "Crema con Naranja",
          "Crema y Durazno",
          "Crema y Frambuesa",
          "Crema y Piña",
          "Crema y Tropical",
          "Crema y Vainilla",
          "Manjar Crema",
        ];
      }

      // subset 2
      if (
        options.includes("Cuadrada") &&
        options.includes("Bizcocho") &&
        options.includes("Nuez") &&
        options.find((e) => {
          const int = parseInt(e);
          return int >= 12 && int <= 50;
        })
      ) {
        return ["Crema con Lúcuma"];
      }

      // subset 3
      if (
        options.includes("Cuadrada") &&
        options.includes("Hoja") &&
        options.includes("Blanco") &&
        options.find((e) => {
          const int = parseInt(e);
          return int >= 12 && int <= 50;
        })
      ) {
        return [
          "Crema con Chocolate",
          "Crema con Lúcuma",
          "Crema con Maracuya",
          "Crema con Mokka",
          "Crema con Naranja",
          "Crema con Trufa",
          "Crema y Durazno",
          "Crema y Frambuesa",
          "Crema y Nuez",
          "Crema y Piña",
          "Crema y Tropical",
          "Crema y Vainilla",
          "Manjar Crema",
        ];
      }
    case 5:
      // subset 1 - 2
      if (
        options.includes("Cuadrada") &&
        options.includes("Bizcocho") &&
        (options.includes("Blanco") || options.includes("Nuez")) &&
        options.find((e) => {
          const int = parseInt(e);
          return int >= 12 && int <= 50;
        }) &&
        options.find((e) => {
          return (
            e === "Crema con Lúcuma" ||
            e === "Crema con Maracuya" ||
            e === "Crema con Mokka" ||
            e === "Crema con Naranja" ||
            e === "Crema y Durazno" ||
            e === "Crema y Frambuesa" ||
            e === "Crema y Piña" ||
            e === "Crema y Tropical"
          );
        })
      ) {
        return ["Manjar", "Vainilla"];
      }

      // subset 3
      if (
        options.includes("Cuadrada") &&
        options.includes("Hoja") &&
        options.includes("Blanco") &&
        options.find((e) => {
          const int = parseInt(e);
          return int >= 12 && int <= 50;
        }) &&
        options.find((e) => {
          return (
            e === "Crema con Lúcuma" ||
            e === "Crema con Maracuya" ||
            e === "Crema con Mokka" ||
            e === "Crema con Naranja" ||
            e === "Crema y Durazno" ||
            e === "Crema y Frambuesa" ||
            e === "Crema y Nuez" ||
            e === "Crema y Piña" ||
            e === "Crema y Tropical"
          );
        })
      ) {
        return ["Manjar", "Vainilla"];
      } else if (
        options.includes("Cuadrada") &&
        options.includes("Hoja") &&
        options.includes("Blanco") &&
        options.find((e) => {
          const int = parseInt(e);
          return int >= 12 && int <= 50;
        }) &&
        options.find((e) => {
          return e === "Crema con Chocolate" || e === "Crema con Trufa";
        })
      ) {
        return ["Manjar", "Mermelada de Frambuesa", "Vainilla"];
      } else {
        return [];
      }

    case 6:
      return [];
    default:
      return [];
  }
};
