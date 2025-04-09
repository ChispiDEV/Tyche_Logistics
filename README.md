# 🚚 Tyche Logistics Invoice System 💼  
📌 Google Apps Script | Google Sheets Automation | PDF Generation | Email Automation

---
# 🌍 English Version

This repository contains the code and automation setup for **Tyche Logistics**, a fictional company responsible for managing the transportation of medical resources for hospitals in the Community of Madrid.

The system is built on **Google Sheets** with **Google Apps Script**, automating the creation of personalized invoices in PDF format and sending them via email to clients.

---
## 🎯 Objectives

- ✅ Automate invoice creation from structured data in a Google Sheet.
- ✅ Automatically generate PDFs of the invoices in a specific Drive folder.
- ✅ Email the invoices to clients.
- ✅ Include business days and regional holidays in date calculations.
- ✅ Provide a clean and professional layout for invoices.

---
## 📁 Repository Structure

```
Tyche_Logistics_Invoice_System/
├── 📁 assets/
│   ├── 📜 tyche_invoices_demo.gs       → Example invoice
│   ├── 🖼️ logo_tyche.png               → Tyche logo design
│   └── 🖼️ logo_tyche_front_page.png    → Tyche logo design for document covers
├── 📁 data/                            → Data used in the system
│   └── 📈 stock-invoices.xlsx          → Inventory management file
├── 📁 docs/                            → PDF or markdown documents with system explanations
│   └── 📜 transport_plan.pdf           → Transport plan document
├── 📁 projects/                        → Additional projects or related analysis
│   ├── 📁 cost_analysis/
│   └── 📈 costs_report.xlsx            → Cost analysis report. 
│   │   ├── 📁 route_optimization/
│   │   ├── 📜 notebook.ipynb           → Route analysis
│   │   ├── 📈 data.csv
│   │   └── 🖼️ output_map.png
│   └── 📁 satisfaction_survey/
Translated with DeepL.com (free version)
├── 📁 scripts/
│   ├── 📜 generate_invoice.gs          → Script to generate PDF invoice
│   ├── 📜 send_invoice_email.gs        → Script to send invoice via email
│   ├── 📜 holiday_calendar.gs          → Holiday calendar logic
│   └── 📜 find_invoice.gs              → Script to locate PDF invoice
├── 📜 LICENSE                          → MIT License
├── 📜 README.md                        → Project documentation
```

---
## 🛠️ Tools & Technologies Used
- 🧾 Google Sheets
- 📜 Google Apps Script (GAS)
- 📤 Gmail API
- 📁 Google Drive API
- 📆 Regional Holiday Logic (Spain & Madrid 2025)
- 📌 Custom formatting and layout using formulas and templates

---
## 🚀 How to Use
1️⃣ **Clone this repository**

```bash
git clone https://github.com/yourusername/Tyche_Logistics_Invoice_System.git
```

2️⃣ **Open the Google Sheet** (create your own if needed) and go to `Extensions > Apps Script`.

3️⃣ **Copy the content of the scripts** in `/scripts/` and paste it into the Apps Script editor.

4️⃣ **Configure your folder and sheet names** inside the scripts if needed.

5️⃣ **Use buttons in the sheet to trigger the functions:**
   - Generate PDF
   - Send invoice by email

6️⃣ **Customize your invoice appearance** with formulas like:
```excel
="FAC-" & TEXT(E11; "0000")
```

7️⃣ **Include holidays in business day calculations** using:
```excel
=IF(B2=""; ""; WORKDAY(B2; 15; Festivos!A2:A15))
```

---
### 📬 Example Use Case
When a new client order is filled in the **Pedidos** sheet:
- Press "Generate Invoice" ➜ PDF saved in `Facturas` folder.
- Press "Send Invoice" ➜ Email sent with the PDF attached.

---
## 🗓️ Spanish Public Holidays Included (2025)
Includes national and regional holidays for the **Community of Madrid** (festivos regionales y nacionales de España 2025).

---
## 📜 License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---
## ⚠️ Notes
🚧 This project is continuously evolving. Feel free to contribute or adapt it to your own needs!

---
## 📧 Questions or suggestions?

Contact me at: [cristinafg.it@gmail.com] or create an issue in the repository.

---
# 🌍 Versión en Español
Este repositorio contiene el sistema automatizado de **Tyche Logistics**, una empresa ficticia que gestiona el transporte de recursos médicos para hospitales en la Comunidad de Madrid.

La automatización está construida en **Google Sheets** mediante **Google Apps Script**.

--
## 🎯 Objetivos
- 🧾 Automatizar la creación de facturas detalladas.
- ✉️ Enviar facturas en PDF por correo electrónico.
- 📅 Calcular fechas de entrega evitando fines de semana y festivos.
- 🔄 Generar automáticamente el contenido a partir de pedidos.

---
## 📁 Estructura del Repositorio:
```
Tyche_Logistics_Invoice_System/
├── 📁 assets/
│   ├── 📜 tyche_invoices_demo.gs       → Ejemplo de factura
│   ├── 🖼️ logo_tyche.png               → Diseño del logo de Tyche
│   └── 🖼️ logo_tyche_front_page.png    → Diseño del logo de Tyche para las portadas de documentos
├── 📁 data/                            → Datos utilizados en el sistema
│   └──  📈 stock-invoices.xlsx         → Archivo de gestión de inventario
├── 📁 docs/                            → Documentos PDF o markdown con explicaciones del sistema
│   └── 📜 transport_plan.pdf           →  Documento del plan de transporte
├── 📁 projects/                        →  Proyectos adicionales o análisis relacionados
│   ├── 📁 cost_analysis/
│       └── 📈 costs_report.xlsx        →  Informe de análisis de costes 
│   ├── 📁 route_optimization/
│   │   ├── 📜 notebook.ipynb           →  Análisis de rutas
│   │   ├── 📈 data.csv
│   │   └── 🖼️ output_map.png
│   └── 📁 satisfaction_survey/
├── 📁 scripts/                         → Scripts de automatización en Google Apps Script (.gs)
│   ├── 📜 generate_invoice.gs          → Script para generar de forma automática la factura en PDF
│   ├── 📜 send_invoice_email.gs        → Script para enviar la factura PDF por correo electrónico
│   ├── 📜 holiday_calendar.gs          → Añadir los festivos de España a la lógica de los archivos
│   ├── 📜 find_invoice.gs              → Script para localizar la factura en PDF
├── 📜 LICENSE                          → Licencia MIT
├── 📜 README.md                        → Documentación general del proyecto
```

---
## 🛠️ Herramientas y Tecnologías utilizadas
- 🧾 Google Sheets
- 📜 Google Apps Script (GAS)
- 📤 Gmail API
- 📁 Google Drive API
- 📆 Selección de las vacaciones regionales (España y Madrid 2025)
- 📌 Formato y maquetación personalizados mediante fórmulas y plantillas

---
## 🚀 Cómo utilizar este Repositorio
1️⃣ **Clone este repositorio**

```bash
git clone https://github.com/ChispiDEV/Tyche_Logistics.git
```

2️⃣ **Abre la hoja de Google** (crea la tuya propia si es necesario) y ve a `Extensions > Apps Script`.

3️⃣ **Copia el contenido de los scripts** en `/scripts/` y pégalo en el editor de Apps Script.

4️⃣ **Configura los nombres de las carpetas y hojas** dentro de los scripts si es necesario.

5️⃣ **Utilice los botones de la hoja para activar las funciones:**
   - Generar PDF
   - Enviar factura por correo electrónico

6️⃣ **Personaliza la apariencia de tu factura** con fórmulas como:
```excel
=«FAC-» & TEXT(E11; «0000»)
```

7️⃣ **Incluya los días festivos en los cálculos de días hábiles** utilizando:
```excel
=IF(B2=«»; «»; WORKDAY(B2; 15; Festivos!A2:A15))
```

---
### 📬 Ejemplo de uso
Cuando se rellena el pedido de un nuevo cliente en la hoja **Pedidos**:
- Pulsar «Generar Factura» ➜ PDF guardado en la carpeta `Facturas`.
- Pulsar «Enviar Factura» ➜ Se envía correo electrónico con el PDF adjunto.

---
## 🗓️ Festivos españoles incluidos (2025)
Incluye festivos nacionales y regionales de la **Comunidad de Madrid** (festivos regionales y nacionales de España 2025).

---
📜 Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

---
## ⚠️ Notas
🚧 Este proyecto está en continua evolución. ¡Siéntete libre de contribuir o adaptarlo a tus propias necesidades!

---
## 📧 ¿Dudas o sugerencias?

Contáctame en: [cristinafg.it@gmail.com] o crea un issue en el repositorio.
