// Define plug data
const plugs = [
  {
    id: "bucha1",
    model: "Nylon Base Plug",
    dimensions: "6.0x40mm",
    length: 60,
    weightRange: [0, 28],
  },
  {
    id: "bucha2",
    model: "Nylon Base Plug",
    dimensions: "8.0x50mm",
    length: 50,
    weightRange: [20, 36],
  },
  {
    id: "bucha3",
    model: "Nylon Base Plug",
    dimensions: "10x60mm",
    length: 60,
    weightRange: [36, 56],
  },

  {
    id: "bucha4",
    model: "Nylon MultiMat Plug",
    dimensions: "6.0x30mm",
    length: 30,
    weightRange: [20, 40],
  },
  {
    id: "bucha5",
    model: "Nylon MultiMat Plug",
    dimensions: "8.0x40mm",
    length: 40,
    weightRange: [40, 80],
  },
  {
    id: "bucha6",
    model: "Nylon MultiMat Plug",
    dimensions: "10x50mm",
    length: 50,
    weightRange: [80, 190],
  },
  {
    id: "bucha7",
    model: "Nylon MultiMat Plug",
    dimensions: "12x60mm",
    length: 60,
    weightRange: [190, 300],
  },

  {
    id: "bucha8",
    model: "Nylon Flex Plug",
    dimensions: "6.0x30mm",
    length: 30,
    weightRange: [40, 55],
  },
  {
    id: "bucha9",
    model: "Nylon Flex Plug",
    dimensions: "8.0x40mm",
    length: 40,
    weightRange: [55, 74],
  },
  {
    id: "bucha10",
    model: "Nylon Flex Plug",
    dimensions: "10x50mm",
    length: 50,
    weightRange: [74, 130],
  },

  {
    id: "bucha11",
    model: "Nylon Universal Plug",
    dimensions: "5.0x25mm",
    length: 25,
    weightRange: [0, 26],
  },
  {
    id: "bucha12",
    model: "Nylon Universal Plug",
    dimensions: "6.0x30mm",
    length: 30,
    weightRange: [26, 52],
  },
  {
    id: "bucha13",
    model: "Nylon Universal Plug",
    dimensions: "8.0x40mm",
    length: 40,
    weightRange: [52, 127],
  },
  {
    id: "bucha14",
    model: "Nylon Universal Plug",
    dimensions: "10x50mm",
    length: 50,
    weightRange: [127, 155],
  },
  {
    id: "bucha15",
    model: "Nylon Universal Plug",
    dimensions: "12x60mm",
    length: 60,
    weightRange: [155, 252],
  },
  {
    id: "bucha16",
    model: "Nylon Universal Plug",
    dimensions: "14x70mm",
    length: 70,
    weightRange: [252, 323],
  },

  {
    id: "bucha17",
    model: "Nylon XL Plug",
    dimensions: "8.0x80mm",
    length: 80,
    weightRange: [130, 162],
  },
  {
    id: "bucha18",
    model: "Nylon XL Plug",
    dimensions: "10x100mm",
    length: 100,
    weightRange: [162, 185],
  },

  {
    id: "bucha19",
    model: "Nylon Brick Plug",
    dimensions: "5.0x30mm",
    length: 30,
    weightRange: [60, 80],
  },
  {
    id: "bucha20",
    model: "Nylon Brick Plug",
    dimensions: "6.0x35mm",
    length: 35,
    weightRange: [80, 110],
  },
  {
    id: "bucha21",
    model: "Nylon Brick Plug",
    dimensions: "8.0x47mm",
    length: 47,
    weightRange: [110, 160],
  },
  {
    id: "bucha22",
    model: "Nylon Brick Plug",
    dimensions: "10x57mm",
    length: 57,
    weightRange: [160, 190],
  },
  {
    id: "bucha23",
    model: "Nylon Brick Plug",
    dimensions: "12x68mm",
    length: 68,
    weightRange: [190, 260],
  },
  {
    id: "bucha24",
    model: "Nylon Brick Plug",
    dimensions: "14x73mm",
    length: 73,
    weightRange: [260, 390],
  },
];

// function calcularBuchas() {
//   var espessuraCarga = parseFloat(
//     document.getElementById("espessuraCarga").value
//   );
//   var pesoCarga = parseFloat(document.getElementById("pesoCarga").value);
//   var suitablePlugs = [];

//   // Check if input fields are empty
//   if (isNaN(espessuraCarga) || isNaN(pesoCarga)) {
//     alert("Por favor, preencha ambos os campos de entrada.");
//     return; // Exit the function if fields are empty
//   }

//   // Find suitable plugs
//   plugs.forEach((plug) => {
//     if (
//       pesoCarga >= plug.weightRange[0] &&
//       pesoCarga <= plug.weightRange[1] &&
//       espessuraCarga * 4 <= plug.length
//     ) {
//       console.log(`Poderá ver a ${plug.model} - ${plug.dimensions}`);
//       suitablePlugs.push(plug.id);
//     }
//   });

//   // Check if no suitable plugs were found
//   if (suitablePlugs.length === 0) {
//     alert("Nenhuma bucha adequada foi encontrada com os valores fornecidos.");
//   }

//   // Update display
//   atualizarExibicaoBuchas(suitablePlugs);
// }

// function atualizarExibicaoBuchas(suitablePlugs) {
//   // Hide all plug divs initially
//   plugs.forEach((plug) => {
//     document.getElementById(plug.id).style.display = "none";
//   });

//   // Show only the suitable plugs
//   suitablePlugs.forEach((plugId) => {
//     document.getElementById(plugId).style.display = "block";
//   });

//   // Display the result section if there are suitable plugs
//   var resultadoDiv = document.getElementById("resultado");
//   resultadoDiv.style.display = suitablePlugs.length > 0 ? "block" : "none";
// }

function calcularBuchas() {
  // Commented out the load thickness retrieval
  // var espessuraCarga = parseFloat(
  //   document.getElementById("espessuraCarga").value
  // );
  var pesoCarga = parseFloat(document.getElementById("pesoCarga").value);
  var suitablePlugs = [];

  // Check if input field is empty
  if (isNaN(pesoCarga)) {
    alert("Por favor, preencha o campo de peso.");
    return; // Exit the function if fields are empty
  }

  // Find suitable plugs based on weight and wall type
  plugs.forEach((plug) => {
    // Condition based only on weight range
    if (pesoCarga >= plug.weightRange[0] && pesoCarga <= plug.weightRange[1]) {
      suitablePlugs.push(plug.id);
    }
  });

  // Check if no suitable plugs were found
  if (suitablePlugs.length === 0) {
    alert("Nenhuma bucha adequada foi encontrada com o peso fornecido.");
  }

  atualizarExibicaoBuchas(suitablePlugs);
}

function atualizarExibicaoBuchas(suitablePlugs) {
  // Hide all plug divs initially
  plugs.forEach((plug) => {
    document.getElementById(plug.id).style.display = "none";
  });

  // Show only the suitable plugs
  suitablePlugs.forEach((plugId) => {
    document.getElementById(plugId).style.display = "block";
  });

  var resultadoDiv = document.getElementById("resultado");
  resultadoDiv.style.display = suitablePlugs.length > 0 ? "block" : "none";
}
