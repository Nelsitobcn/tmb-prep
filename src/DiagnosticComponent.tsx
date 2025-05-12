import React, { useEffect, useState } from 'react';
import { useStore } from './store';
import { tests as initialTests, infoGeneral } from './data/tests';
import { auth } from './firebaseConfig';
import { ArrowLeft, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

// Versión para Netlify
const NETLIFY_URL = "https://tmb-prep-curso.netlify.app/";

export const DiagnosticComponent: React.FC = () => {
  const { tests: storeTests, currentTestId } = useStore();
  const [urlTestId, setUrlTestId] = useState<string | null>(null);
  const [showAdvancedDiagnostic, setShowAdvancedDiagnostic] = useState(false);
  const [diagnosticResult, setDiagnosticResult] = useState<any>(null);
  const [isFixing, setIsFixing] = useState(false);
  const [fixResult, setFixResult] = useState<string | null>(null);
  
  // Obtener el ID del test de la URL
  useEffect(() => {
    const testId = new URLSearchParams(window.location.search).get('testId');
    setUrlTestId(testId);
    
    // Verificar si estamos en Netlify
    const isNetlify = window.location.href.includes("netlify.app");
    console.log("Diagnóstico - Entorno:", isNetlify ? "Netlify" : "Desarrollo local");
  }, []);
  
  // Función para ejecutar diagnóstico completo
  const runDiagnostic = () => {
    const isNetlify = window.location.href.includes("netlify.app");
    const isAuthenticated = auth.currentUser !== null;
    const testsInStore = storeTests.length > 0;
    const testsInLocal = initialTests.length > 0;
    const infoInLocal = infoGeneral.length > 0;
    const testIdInUrl = urlTestId !== null;
    
    // Verificar si el test existe
    let testExists = false;
    if (urlTestId) {
      testExists = [...storeTests, ...initialTests, ...infoGeneral].some(
        t => String(t.id) === urlTestId
      );
    }
    
    // Guardar resultados
    setDiagnosticResult({
      isNetlify,
      isAuthenticated,
      testsInStore,
      testsInLocal,
      infoInLocal,
      testIdInUrl,
      testExists,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent
    });
  };
  
  // Función para intentar arreglar problemas comunes
  const fixCommonIssues = () => {
    setIsFixing(true);
    setFixResult(null);
    
    try {
      // Limpiar localStorage
      localStorage.clear();
      
      // Resultado
      setFixResult("✅ Almacenamiento local limpiado correctamente. Intenta recargar la página o volver a la lista de tests.");
    } catch (error: any) {
      setFixResult(`❌ Error al intentar arreglar: ${error.message}`);
    } finally {
      setIsFixing(false);
    }
  };
  
  // Función para volver a la lista de tests
  const goToTestList = () => {
    window.history.replaceState({}, document.title, '/');
    window.location.reload();
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Diagnóstico de Tests</h2>
        <button
          onClick={() => setShowAdvancedDiagnostic(!showAdvancedDiagnostic)}
          className="text-sm bg-blue-100 hover:bg-blue-200 text-blue-800 py-1 px-3 rounded flex items-center"
        >
          {showAdvancedDiagnostic ? "Ocultar detalles" : "Mostrar detalles avanzados"}
        </button>
      </div>
      
      {/* Sección de diagnóstico rápido */}
      <div className="mb-6 p-4 bg-blue-50 rounded border border-blue-200">
        <h3 className="font-semibold mb-4 flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2 text-blue-600" />
          Diagnóstico Rápido
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="p-3 bg-white rounded shadow-sm">
            <h4 className="font-medium mb-2">Estado Actual</h4>
            <p className="text-sm">Usuario: {auth.currentUser ?
              <span className="text-green-600 font-medium">✓ Autenticado</span> :
              <span className="text-red-600 font-medium">✗ No autenticado</span>}
            </p>
            <p className="text-sm">Tests disponibles: {storeTests.length > 0 ?
              <span className="text-green-600 font-medium">✓ {storeTests.length} tests</span> :
              <span className="text-red-600 font-medium">✗ No hay tests</span>}
            </p>
            <p className="text-sm">Test actual: {urlTestId ?
              <span className="font-medium">ID: {urlTestId}</span> :
              <span className="text-gray-500 font-medium">Ninguno seleccionado</span>}
            </p>
          </div>
          
          <div className="p-3 bg-white rounded shadow-sm">
            <h4 className="font-medium mb-2">Acciones Rápidas</h4>
            <div className="space-y-2">
              <button
                onClick={runDiagnostic}
                className="w-full text-sm bg-green-100 hover:bg-green-200 text-green-800 py-1 px-3 rounded text-left flex items-center"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Ejecutar diagnóstico completo
              </button>
              
              <button
                onClick={fixCommonIssues}
                disabled={isFixing}
                className="w-full text-sm bg-yellow-100 hover:bg-yellow-200 text-yellow-800 py-1 px-3 rounded text-left flex items-center disabled:opacity-50"
              >
                {isFixing ? "Arreglando..." : (
                  <>
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Arreglar problemas comunes
                  </>
                )}
              </button>
              
              <button
                onClick={goToTestList}
                className="w-full text-sm bg-blue-100 hover:bg-blue-200 text-blue-800 py-1 px-3 rounded text-left flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver a la lista de tests
              </button>
            </div>
          </div>
        </div>
        
        {/* Resultados de diagnóstico o arreglo */}
        {diagnosticResult && (
          <div className="mt-4 p-3 bg-white rounded shadow-sm">
            <h4 className="font-medium mb-2">Resultado del Diagnóstico</h4>
            <div className="text-sm space-y-1">
              <p>Autenticación: {diagnosticResult.isAuthenticated ?
                <span className="text-green-600">✓ Correcto</span> :
                <span className="text-red-600">✗ Problema</span>}
              </p>
              <p>Tests en Store: {diagnosticResult.testsInStore ?
                <span className="text-green-600">✓ Disponibles</span> :
                <span className="text-red-600">✗ No disponibles</span>}
              </p>
              <p>Tests en Archivo: {diagnosticResult.testsInLocal ?
                <span className="text-green-600">✓ Disponibles</span> :
                <span className="text-red-600">✗ No disponibles</span>}
              </p>
              <p>Info General: {diagnosticResult.infoInLocal ?
                <span className="text-green-600">✓ Disponible</span> :
                <span className="text-red-600">✗ No disponible</span>}
              </p>
              {diagnosticResult.testIdInUrl && (
                <p>Test solicitado: {diagnosticResult.testExists ?
                  <span className="text-green-600">✓ Existe</span> :
                  <span className="text-red-600">✗ No existe</span>}
                </p>
              )}
            </div>
            
            <div className="mt-3 p-2 bg-gray-50 rounded text-sm">
              <p className="font-medium">Diagnóstico:</p>
              {diagnosticResult.isAuthenticated && diagnosticResult.testsInStore &&
               diagnosticResult.testsInLocal && diagnosticResult.infoInLocal &&
               (!diagnosticResult.testIdInUrl || diagnosticResult.testExists) ? (
                <p className="text-green-600">✓ Todo parece correcto. Si sigues teniendo problemas, intenta limpiar el almacenamiento local.</p>
              ) : (
                <div>
                  <p className="text-red-600">✗ Se han detectado problemas:</p>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    {!diagnosticResult.isAuthenticated && <li>No estás autenticado. Inicia sesión para ver los tests.</li>}
                    {!diagnosticResult.testsInStore && <li>Los tests no están disponibles en el store.</li>}
                    {!diagnosticResult.testsInLocal && <li>Los tests no están disponibles en el archivo local.</li>}
                    {!diagnosticResult.infoInLocal && <li>La información general no está disponible.</li>}
                    {diagnosticResult.testIdInUrl && !diagnosticResult.testExists && <li>El test solicitado (ID: {urlTestId}) no existe.</li>}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
        
        {fixResult && (
          <div className="mt-4 p-3 bg-white rounded shadow-sm">
            <h4 className="font-medium mb-2">Resultado de la Reparación</h4>
            <p className="text-sm">{fixResult}</p>
          </div>
        )}
      </div>
      
      {/* Sección de diagnóstico avanzado (expandible) */}
      {showAdvancedDiagnostic && (
        <>
          <div className="mb-6 p-4 bg-gray-100 rounded">
            <h3 className="font-semibold mb-2">Estado de Autenticación:</h3>
            <p>Usuario actual: {auth.currentUser ? `${auth.currentUser.email || auth.currentUser.uid} (${auth.currentUser.isAnonymous ? 'anónimo' : 'registrado'})` : 'No autenticado'}</p>
          </div>
          
          <div className="mb-6 p-4 bg-gray-100 rounded">
            <h3 className="font-semibold mb-2">Estado Actual:</h3>
            <p>ID de test en URL: {urlTestId || 'ninguno'}</p>
            <p>ID de test en Store: {currentTestId || 'ninguno'}</p>
          </div>
          
          <div className="mb-6 p-4 bg-gray-100 rounded">
            <h3 className="font-semibold mb-2">Tests en Store:</h3>
            <p>Número de tests: {storeTests.length}</p>
            <div className="mt-2 max-h-40 overflow-y-auto">
              <ul className="list-disc pl-5">
                {storeTests.map(test => (
                  <li key={test.id}>
                    ID: {test.id} - {test.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mb-6 p-4 bg-gray-100 rounded">
            <h3 className="font-semibold mb-2">Tests en Archivo Local:</h3>
            <p>Número de tests en initialTests: {initialTests.length}</p>
            <p>Número de items en infoGeneral: {infoGeneral.length}</p>
            <div className="mt-2 max-h-40 overflow-y-auto">
              <h4 className="font-medium">Tests:</h4>
              <ul className="list-disc pl-5">
                {initialTests.map(test => (
                  <li key={test.id}>
                    ID: {test.id} - {test.title}
                  </li>
                ))}
              </ul>
              
              <h4 className="font-medium mt-2">Info General:</h4>
              <ul className="list-disc pl-5">
                {infoGeneral.map(info => (
                  <li key={info.id}>
                    ID: {info.id} - {info.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mb-6 p-4 bg-gray-100 rounded">
            <h3 className="font-semibold mb-2">Verificación de Test Actual:</h3>
            {urlTestId && (
              <>
                <p>Buscando test con ID: {urlTestId}</p>
                <p>Encontrado en store: {storeTests.some(t => String(t.id) === urlTestId) ? 'Sí' : 'No'}</p>
                <p>Encontrado en initialTests: {initialTests.some(t => String(t.id) === urlTestId) ? 'Sí' : 'No'}</p>
                <p>Encontrado en infoGeneral: {infoGeneral.some(t => String(t.id) === urlTestId) ? 'Sí' : 'No'}</p>
              </>
            )}
          </div>
        </>
      )}
      
      <div className="text-sm text-gray-500 mt-4">
        <p>Este componente de diagnóstico ayuda a identificar problemas con la carga de tests.</p>
        <p>Si ves "test no encontrado", comparte esta información con el soporte técnico.</p>
        <p className="mt-2">
          <strong>Entorno:</strong> {window.location.href.includes("netlify.app") ? "Netlify" : "Desarrollo local"}
        </p>
        <p>
          <strong>URL completa:</strong> {window.location.href}
        </p>
      </div>
    </div>
  );
};

export default DiagnosticComponent;