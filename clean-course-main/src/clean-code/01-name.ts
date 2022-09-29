(() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate
  // Antes
  //   const fs = [
  //     { id: 1, f: false },
  //     { id: 2, f: false },
  //     { id: 3, f: true },
  //     { id: 4, f: false },
  //     { id: 5, f: false },
  //     { id: 7, f: true },
  //   ];
  // Ahora
  const filesToEvaluate = [
    { id: 1, flagged: false },
    { id: 2, flagged: false },
    { id: 3, flagged: true },
    { id: 4, flagged: false },
    { id: 5, flagged: false },
    { id: 7, flagged: true },
  ];

  // Archivos marcados para borrar - files to delete
  // Antes
  // const arhivos = fs.map((f) => f.f);
  // Ahora
  const filesToDelete = filesToEvaluate.map((file) => file.flagged);

  // Todo: Tarea

  // día de hoy - today
  // const ddmmyyyy = new Date();
  const currentDate = new Date();

  // días transcurridos - elapsed time in days
  // const d: number = 23;
  const elapsedDays = 23;

  // número de archivos en un directorio - number of files in directory
  // const dir = 33;
  const filesInFolder = 33;

  // primer nombre - first name
  // const nombre = "Sócrates";
  const name = "Sócrates";

  // primer apellido - last name
  // const apellido = "Manaure";
  const lastName = "Manaure";

  // días desde la última modificación - days since modification
  // const dsm = 12;
  const daysSinceLastUpdate = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  //const max = 6;
  const maxClassesPerStudent = 6;
})();
