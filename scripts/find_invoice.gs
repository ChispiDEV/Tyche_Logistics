// Script para localizar la Factura

function localizarFactura() {
  var folderName = "Curso IA - Grupo 1469"; // Carpeta principal
  var subFolderName = "Facturas"; // Subcarpeta donde se guardan las facturas
  
  // Obtener la carpeta principal
  var folders = DriveApp.getFoldersByName(folderName);
  if (!folders.hasNext()) {
    Logger.log("⚠️ No se encontró la carpeta: " + folderName);
    SpreadsheetApp.getUi().alert("No se encontró la carpeta principal.");
    return;
  }
  var mainFolder = folders.next();
  
  // Obtener la subcarpeta "Facturas"
  var subFolders = mainFolder.getFoldersByName(subFolderName);
  if (!subFolders.hasNext()) {
    Logger.log("⚠️ No se encontró la subcarpeta: " + subFolderName);
    SpreadsheetApp.getUi().alert("No se encontró la carpeta de facturas.");
    return;
  }
  var invoicesFolder = subFolders.next();
  
  // Obtener el número de factura desde la celda E12 de la última hoja
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = spreadsheet.getSheets();
  var lastSheet = sheets[sheets.length - 1]; // Última hoja
  var invoiceNumber = lastSheet.getRange("E11").getValue();
  
  // Nombre del archivo esperado
  var expectedFileName = "Factura_" + invoiceNumber + ".pdf";
  
  // Buscar el archivo en la carpeta "Facturas"
  var files = invoicesFolder.getFilesByName(expectedFileName);
  if (files.hasNext()) {
    var file = files.next();
    var fileUrl = file.getUrl();
    
    // Mostrar un mensaje con el enlace a la factura
    SpreadsheetApp.getUi().alert("Factura encontrada: " + fileUrl);
  } else {
    SpreadsheetApp.getUi().alert("No se encontró la factura: " + expectedFileName);
  }
}
