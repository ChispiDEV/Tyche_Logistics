// Script para generar la factura como PDF

function generarFacturaPDF() {
  var folderName = "Curso IA - Grupo 1469"; // Nombre de la carpeta principal
  var subFolderName = "Facturas"; // Nombre de la subcarpeta donde se guardarán las facturas
  
  // Obtener la carpeta principal "Curso IA - Grupo 1469"
  var folders = DriveApp.getFoldersByName(folderName);
  if (!folders.hasNext()) {
    Logger.log("⚠️ No se encontró la carpeta: " + folderName);
    return;
  }
  var mainFolder = folders.next();
  
  // Buscar o crear la carpeta "Facturas" dentro de "Curso IA - Grupo 1469"
  var subFolders = mainFolder.getFoldersByName(subFolderName);
  var invoicesFolder = subFolders.hasNext() ? subFolders.next() : mainFolder.createFolder(subFolderName);
  

  // Obtener la última hoja del documento
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = spreadsheet.getSheets();
  var sheet = sheets[sheets.length - 1]; // Última hoja
  
  // Ocultar líneas de cuadrícula en la hoja activa
  sheet.setHiddenGridlines(true);
  
  // Nombre del archivo PDF
  var nombreArchivo = "Factura_" + sheet.getRange("E11").getValue() + ".pdf"; // Usa el número de pedido
  
  // Generar el PDF de la última hoja
  var url = "https://docs.google.com/spreadsheets/d/" + spreadsheet.getId() + 
            "/export?format=pdf&gid=" + sheet.getSheetId() + 
            "&portrait=true&size=A4&fitw=true&gridlines=false";
  
  var options = {
    muteHttpExceptions: true,
    headers: { "Authorization": "Bearer " + ScriptApp.getOAuthToken() }
  };
  var response = UrlFetchApp.fetch(url, options);
  var pdfBlob = response.getBlob().setName(nombreArchivo);
  
  // Guardar el PDF en la carpeta "Facturas"
  var file = invoicesFolder.createFile(pdfBlob);
  
  Logger.log("✅ Factura guardada en: " + file.getUrl());
  SpreadsheetApp.getUi().alert("Factura guardada con éxito en la carpeta 'Facturas'");
}