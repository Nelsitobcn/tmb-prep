// Importamos los datos de los tests
const fs = require('fs');
const path = require('path');

// Función para leer el archivo de tests
function readTestsFile() {
  try {
    const filePath = path.join(__dirname, 'src', 'data', 'tests.ts');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    console.log('Archivo de tests leído correctamente');
    return fileContent;
  } catch (error) {
    console.error('Error al leer el archivo de tests:', error);
    return null;
  }
}

// Función para extraer los datos de los tests
function extractTestsData(fileContent) {
  try {
    // Buscar la definición de los tests
    const testsMatch = fileContent.match(/export const tests: Test\[\] = \[([\s\S]*?)\];/);
    if (!testsMatch) {
      console.error('No se encontró la definición de los tests');
      return null;
    }
    
    console.log('Definición de tests encontrada');
    
    // Contar el número de objetos de test
    const testContent = testsMatch[1];
    const testCount = (testContent.match(/id: \d+/g) || []).length;
    console.log(`Número de tests encontrados: ${testCount}`);
    
    // Extraer los IDs de los tests
    const testIds = [];
    const idMatches = testContent.match(/id: (\d+)/g) || [];
    idMatches.forEach(match => {
      const id = match.replace('id: ', '');
      testIds.push(id);
    });
    console.log('IDs de los tests:', testIds);
    
    // Buscar la definición de infoGeneral
    const infoGeneralMatch = fileContent.match(/export const infoGeneral = \[([\s\S]*?)\];/);
    if (!infoGeneralMatch) {
      console.log('No se encontró la definición de infoGeneral');
      return { testCount, testIds, infoGeneralCount: 0, infoGeneralIds: [] };
    }
    
    console.log('Definición de infoGeneral encontrada');
    
    // Contar el número de objetos de infoGeneral
    const infoGeneralContent = infoGeneralMatch[1];
    const infoGeneralCount = (infoGeneralContent.match(/id: ["'].*?["']/g) || []).length;
    console.log(`Número de infoGeneral encontrados: ${infoGeneralCount}`);
    
    // Extraer los IDs de infoGeneral
    const infoGeneralIds = [];
    const infoIdMatches = infoGeneralContent.match(/id: ["'](.*?)["']/g) || [];
    infoIdMatches.forEach(match => {
      const id = match.replace(/id: ["']/, '').replace(/["']/, '');
      infoGeneralIds.push(id);
    });
    console.log('IDs de infoGeneral:', infoGeneralIds);
    
    return { testCount, testIds, infoGeneralCount, infoGeneralIds };
  } catch (error) {
    console.error('Error al extraer los datos de los tests:', error);
    return null;
  }
}

// Función principal
function main() {
  console.log('Verificando datos de los tests...');
  
  const fileContent = readTestsFile();
  if (!fileContent) {
    return;
  }
  
  const testsData = extractTestsData(fileContent);
  if (!testsData) {
    return;
  }
  
  console.log('\nResumen:');
  console.log(`- Número total de tests: ${testsData.testCount}`);
  console.log(`- IDs de los tests: ${testsData.testIds.join(', ')}`);
  console.log(`- Número total de infoGeneral: ${testsData.infoGeneralCount}`);
  console.log(`- IDs de infoGeneral: ${testsData.infoGeneralIds.join(', ')}`);
}

// Ejecutar la función principal
main();