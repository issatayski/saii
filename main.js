const tabs = document.querySelectorAll('.tab');
const contentBox = document.getElementById('content-box');

const contentMap = {
    saffa: 'Дуа, читаемая на Саффе. Тестовый текст дуа...',
    zhasyl: 'Дуа в зелёной зоне (Жасыл). Тестовый текст...',
    marwa: 'Дуа, читаемая на Марве. Тестовый текст...',
    step1: 'Дуа — проход 1',
    step2: 'Дуа — проход 2',
    step3: 'Дуа — проход 3',
    step4: 'Дуа — проход 4',
    step5: 'Дуа — проход 5',
    step6: 'Дуа — проход 6',
    step7: 'Дуа — проход 7'
};

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tab.classList.toggle('active');
        const key = tab.dataset.content;
        contentBox.innerHTML = `<p>${contentMap[key]}</p>`;
    });
});
