// Ejemplo de validación básica en el lado del cliente
        document.getElementById("formularioAbierto").addEventListener("submit", function(event) {
            const preguntasKeywords = {
                'pregunta1': ['was', 'were', 'watching', 'eating', 'sleeping', 'studying', 'working'],
                'pregunta2': ['yes', 'no', 'were', 'weren\'t', 'studying'],
                'pregunta3': ['was', 'wearing', 'dress', 'shirt', 'pants', 'clothes', 'jacket'],
                'pregunta4': ['yes', 'no', 'was', 'wasn\'t', 'playing'],
                'pregunta5': ['was', 'were', 'thinking', 'about']
            };

            let formValido = true;
            let mensajesError = [];

            for (let i = 1; i <= 5; i++) {
                const respuesta = document.getElementById(`pregunta${i}`).value.toLowerCase().trim();
                
                // Verificar longitud mínima
                if (respuesta.length < 10) {
                    mensajesError.push(`La respuesta ${i} debe tener al menos 20 caracteres.`);
                    formValido = false;
                    continue;
                }

                // Verificar palabras clave
                const keywordsEncontradas = preguntasKeywords[`pregunta${i}`].some(keyword => 
                    respuesta.includes(keyword)
                );

                if (!keywordsEncontradas) {
                    mensajesError.push(`La respuesta ${i} no parece estar relacionada con la pregunta.`);
                    formValido = false;
                }
            }

            if (!formValido) {
                alert(mensajesError.join('\n'));
                event.preventDefault();
            }
        });
