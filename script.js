        const screen = document.getElementById('screen');
        const buttons = document.querySelectorAll('.button');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.textContent;

                if (value === 'C') {
                    screen.textContent = '';
                } else if (value === '=') {
                    try {
                        screen.textContent = eval(screen.textContent);
                    } catch {
                        screen.textContent = 'Error';
                    }
                } else if (value === 'sin') {
                    screen.textContent = Math.sin(parseFloat(screen.textContent) * Math.PI / 180).toFixed(4);
                } else if (value === 'cos') {
                    screen.textContent = Math.cos(parseFloat(screen.textContent) * Math.PI / 180).toFixed(8);
                } else if (value === 'tan') {
                    screen.textContent = Math.tan(parseFloat(screen.textContent) * Math.PI / 180).toFixed(8);
                } else {
                    screen.textContent += value;
                }
            });
        });