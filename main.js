const tabs = document.querySelectorAll('.tab');
const contentBox = document.getElementById('content-box');

const contentMap = {
    saffa: 'Дуа, читаемая на Саффе. Текст дуа...',
    zhasyl: 'Дуа в зоне Жасыл. Текст дуа...',
    marwa: 'Дуа на Марве. Текст дуа...',
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

        const key = tab.dataset.content;
        contentBox.innerHTML = `<p>${contentMap[key]}</p>`;
    });
});
