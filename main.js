const tabs = document.querySelectorAll('.tab');
const contentBox = document.getElementById('content-box');

const contentMap = {
    saffa: 'Дуа на Саффе. Спокойный текст для чтения...',
    zhasyl: 'Дуа в зелёной зоне. Сосредоточение и намерение...',
    marwa: 'Дуа на Марве. Завершение и благодарность...',
    step1: 'Дуа – проход 1',
    step2: 'Дуа – проход 2',
    step3: 'Дуа – проход 3',
    step4: 'Дуа – проход 4',
    step5: 'Дуа – проход 5',
    step6: 'Дуа – проход 6',
    step7: 'Дуа – проход 7'
};

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        contentBox.style.opacity = 0;
        setTimeout(() => {
            contentBox.innerHTML = `<p>${contentMap[tab.dataset.content]}</p>`;
            contentBox.style.opacity = 1;
        }, 150);
    });
});
