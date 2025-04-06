// Script para enviar la factura por email

function enviarFacturaEmail() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  var hojaFactura = sheets[sheets.length - 1]; // Usar la última hoja en lugar de un nombre fijo
  
  var numeroFactura = hojaFactura.getRange("E11").getValue().toString().trim();
  var emailCliente = hojaFactura.getRange("A11").getValue().toString().trim();

  if (!numeroFactura || !emailCliente) {
    SpreadsheetApp.getUi().alert("⚠️ Falta el número de factura o el email del cliente.");
    return;
  }

  // 🔹 Buscar la carpeta principal "Curso IA - Grupo 1469"
  var folders = DriveApp.getFoldersByName("Curso IA - Grupo 1469");
  if (!folders.hasNext()) {
    SpreadsheetApp.getUi().alert("⚠️ No se encontró la carpeta 'Curso IA - Grupo 1469' en Google Drive.");
    return;
  }
  var mainFolder = folders.next();
  
  // 🔹 Buscar la subcarpeta "Facturas"
  var subFolders = mainFolder.getFoldersByName("Facturas");
  if (!subFolders.hasNext()) {
    SpreadsheetApp.getUi().alert("⚠️ No se encontró la subcarpeta 'Facturas'.");
    return;
  }
  var invoicesFolder = subFolders.next();

  // 🔹 Buscar la factura PDF en la carpeta "Facturas"
  var archivos = invoicesFolder.getFilesByName("Factura_" + numeroFactura + ".pdf");
  if (!archivos.hasNext()) {
    SpreadsheetApp.getUi().alert("⚠️ No se encontró la factura " + numeroFactura + ". Genera el PDF primero.");
    return;
  }
  var archivoPDF = archivos.next();

  // 🔹 Enviar el email con la factura adjunta
  var asunto = "Factura " + numeroFactura + " - Tyche Logistics";
  var cuerpo = "Estimado cliente,\n\nAdjunto encontrará su factura " + numeroFactura + ".\n\nGracias por confiar en nosotros.";

  try {
    MailApp.sendEmail({
      to: emailCliente,
      subject: asunto,
      body: cuerpo,
      attachments: [archivoPDF.getAs(MimeType.PDF)]
    });

    SpreadsheetApp.getUi().alert("✅ Factura enviada por correo a " + emailCliente);
  } catch (e) {
    SpreadsheetApp.getUi().alert("⚠️ Error al enviar el correo: " + e.message);
  }
}
