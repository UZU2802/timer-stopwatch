// 요소 생성 헬퍼 함수
function createElement(tag, options = {}) {
    const element = document.createElement(tag);
    if (options.textContent) element.textContent = options.textContent;
    if (options.className) element.className = options.className;
    if (options.id) element.id = options.id;
    return element;
}

// 제목 생성
function createHeader() {
    const headerTitle = createElement('h1', { textContent: 'Timer & Stopwatch' });
    return headerTitle;
}

// 내비게이션 메뉴 생성
function createNavMenu() {
    const navMenu = createElement('nav');
    const navList = createElement('ul');

    const timerNavItem = createElement('li');
    const timerButton = createElement('button', { textContent: 'Timer' });

    const stopwatchNavItem = createElement('li');
    const stopwatchButton = createElement('button', { textContent: 'Stopwatch' });

    timerNavItem.appendChild(timerButton);
    stopwatchNavItem.appendChild(stopwatchButton);
    navList.appendChild(timerNavItem);
    navList.appendChild(stopwatchNavItem);
    navMenu.appendChild(navList);
    timerButton.addEventListener('click', () => console.log('Timer Clicked'));
    stopwatchButton.addEventListener('click', () => console.log('Stopwatch Clicked'));

    return navMenu;
}

// 디자인 요소 생성
function createTimerBox() {
    const timerBox = createElement('div');
    const boxInner1 = createElement('div');
    const boxInner2 = createElement('div');

    timerBox.appendChild(boxInner1);
    timerBox.appendChild(boxInner2);

    return timerBox;
}

// 타이머 숫자 표시 생성
function createTimerDisplay() {
    const minuteBox = createTimerBox();
    const secondBox = createTimerBox();
    const millisecondBox = createTimerBox();

    const timerDisplayContainer = createElement('section');
    const minuteDisplay = createElement('p', { textContent: '00' });
    const secondDisplay = createElement('p', { textContent: '00' });
    const millisecondDisplay = createElement('p', { textContent: '00' });

    const firstColon = createElement('span', { textContent: ':' });
    const secondColon = createElement('span', { textContent: ':' });

    minuteBox.appendChild(minuteDisplay);
    timerDisplayContainer.appendChild(minuteBox);
    timerDisplayContainer.appendChild(firstColon);
    secondBox.appendChild(secondDisplay);
    timerDisplayContainer.appendChild(secondBox);
    timerDisplayContainer.appendChild(secondColon);
    millisecondBox.appendChild(millisecondDisplay);
    timerDisplayContainer.appendChild(millisecondBox);

    return timerDisplayContainer;
}

// 버튼 컨테이너 생성
function createButtons() {
    const buttonContainer = createElement('div');

    const startButton = createElement('button', { textContent: 'Start' });
    const pauseButton = createElement('button', { textContent: 'Pause' });
    const resetButton = createElement('button', { textContent: 'Reset' });

    buttonContainer.appendChild(startButton);
    buttonContainer.appendChild(pauseButton);
    buttonContainer.appendChild(resetButton);

    return buttonContainer;
}

// 전체 DOM 구조 생성
function createApp() {
    const mainContainer = document.getElementById('container');

    // Header
    const headerTitle = createHeader();

    // Navigation
    const navMenu = createNavMenu();

    // Timer & Buttons
    const contentSection = createElement('article');
    const timerDisplayContainer = createTimerDisplay();
    const buttonContainer = createButtons();

    contentSection.appendChild(timerDisplayContainer);
    contentSection.appendChild(buttonContainer);

    // Append to main container
    mainContainer.appendChild(headerTitle);
    mainContainer.appendChild(navMenu);
    mainContainer.appendChild(contentSection);
}

// 실행
createApp();
