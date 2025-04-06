// Script con las funciones para incluir los festivos de 2025 en los cálculos de días laborables

function obtenerFestivos2025() {
  return [
    new Date('2025-01-01'), // Año Nuevo
    new Date('2025-01-06'), // Reyes
    new Date('2025-03-19'), // San José
    new Date('2025-03-20'), // Jueves Santo (variable)
    new Date('2025-03-21'), // Viernes Santo
    new Date('2025-05-01'), // Día del Trabajador
    new Date('2025-05-02'), // Fiesta de la Comunidad de Madrid
    new Date('2025-07-25'), // Santiago Apóstol
    new Date('2025-08-15'), // Asunción de la Virgen
    new Date('2025-10-12'), // Fiesta Nacional de España
    new Date('2025-11-01'), // Todos los Santos
    new Date('2025-12-06'), // Día de la Constitución
    new Date('2025-12-08'), // Inmaculada Concepción
    new Date('2025-12-25')  // Navidad
  ];
}

function calcularFechaEntrega(inicio, diasLaborales) {
  const festivos = obtenerFestivos2025();
  return Utilities.formatDate(
    new Date(WorkdayService.getWorkday(new Date(inicio), diasLaborales, festivos)),
    Session.getScriptTimeZone(),
    "EEEE, dd 'de' MMMM 'de' yyyy"
  );
}
