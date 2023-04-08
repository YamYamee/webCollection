const searchButton = document.querySelector('.button');
const deleteButton = document.querySelector('.deleteButton');
const list = document.querySelector('.list');
const mainList = document.querySelector('.body');
const colorSet = ["#FC9EBD","#FFADC5","#FFA9B0","#FFCCCC","#CCD1FF","#A8C8F9","#FFDDA6", "#B8F3B8"];

const exampleList = [
	{
		학년: 1,
		이수구분: '교양필수',
		과목번호: 123455,
		과목명: '김치빨리먹기',
		담당교수: '최동주선생님',
		학점: 3,
		시간: '월 1 2',
		강의실: '그런거없다',
		강의평: '집에 좀 보내주세요',
		담은인원: '있겠냐',
		개설학과: 'none',
		유의사항: '쓸말이없네',
	},
	{
		학년: 1,
		이수구분: '교양필수',
		과목번호: 23124,
		과목명: '은밀한계획세우기',
		담당교수: '송용호선생님',
		학점: 3,
		시간: '수 1 2',
		강의실: '비대면수업임',
		강의평: '시간이 안간다....',
		담은인원: '이걸 왜 듣냐',
		개설학과: 'none',
		유의사항: '휴가 나가고 싶다',
	},
	{
		학년: 3,
		이수구분: '교양선택',
		과목번호: 25431,
		과목명: '계란소금안치고먹기',
		담당교수: '냠냠이선생님',
		학점: 3,
		시간: '금 3 4',
		강의실: '그런거없다',
		강의평: '집에 좀 보내주세요',
		담은인원: '있겠냐',
		개설학과: 'none',
		유의사항: '쓸말이없네',
	},
];

const yourList = [];

const flexBox = [0.5, 0.5, 1.5, 1, 1, 1, 0.5, 3, 1, 1, 1, 3];

searchButton.addEventListener('click', () => {
	list.style.display = 'block';
});

deleteButton.addEventListener('click', () => {
	list.style.display = 'none';
});

function makeList() {
	for (let j = 0; j < exampleList.length; j++) {
		const list = document.createElement('li');
		for (let i = 0; i < Object.keys(exampleList[j]).length; i++) {
			const div = document.createElement('div');
			const arr = Object.values(exampleList[j]);
			div.innerHTML = arr[i];
			div.style.flex = flexBox[i];
			list.appendChild(div);
		}

		list.addEventListener('mouseover', () => {
			decodingTime(j);
		});
		list.addEventListener('mouseout', () => {
			undodecodingTime(j);
		});
		list.addEventListener('click', () => {
			addList(j);
		});

		mainList.appendChild(list);
	}
}

function decodingTime(i) {
	const table = document.querySelector('tbody');
	const x = document.createElement('button');
	const num = Math.floor(Math.random() * colorSet.length);
	x.innerText = 'X';

	switch (exampleList[i].시간[0]) {
		case '월':
			table.children[exampleList[i].시간[2]].children[1].style.backgroundColor = colorSet[num];
			table.children[exampleList[i].시간[2]].children[1].style.borderBottom =
				`solid 0.5px ${colorSet[num]}`;
			table.children[exampleList[i].시간[4]].children[1].style.backgroundColor = colorSet[num];
			table.children[exampleList[i].시간[2]].children[1].innerHTML = exampleList[i].과목명;
			x.style.float = 'right';
			x.style.border = "none";
			x.dataset.id = i;
			x.addEventListener('click', deleteList);
			table.children[exampleList[i].시간[2]].children[1].appendChild(x);
			break;
		case '화':
			table.children[exampleList[i].시간[2]].children[2].style.backgroundColor = colorSet[num];
			table.children[exampleList[i].시간[2]].children[2].style.borderBottom =
				`solid 0.5px ${colorSet[num]}`;
			table.children[exampleList[i].시간[4]].children[2].style.backgroundColor = colorSet[num];
			table.children[exampleList[i].시간[2]].children[2].innerHTML = exampleList[i].과목명;
			x.style.float = 'right';
			x.style.border = "none";
			x.dataset.id = i;
			x.addEventListener('click', deleteList);
			table.children[exampleList[i].시간[2]].children[2].appendChild(x);
			break;
		case '수':
			table.children[exampleList[i].시간[2]].children[3].style.backgroundColor = colorSet[num];
			table.children[exampleList[i].시간[2]].children[3].style.borderBottom =
				`solid 0.5px ${colorSet[num]}`;
			table.children[exampleList[i].시간[4]].children[3].style.backgroundColor =colorSet[num];
			table.children[exampleList[i].시간[2]].children[3].innerHTML = exampleList[i].과목명;
			x.style.float = 'right';
			x.style.border = "none";
			x.dataset.id = i;
			x.addEventListener('click', deleteList);
			table.children[exampleList[i].시간[2]].children[3].appendChild(x);
			break;
		case '목':
			table.children[exampleList[i].시간[2]].children[4].style.backgroundColor = colorSet[num];
			table.children[exampleList[i].시간[2]].children[4].style.borderBottom =
				`solid 0.5px ${colorSet[num]}`;
			table.children[exampleList[i].시간[4]].children[4].style.backgroundColor = colorSet[num];
			table.children[exampleList[i].시간[2]].children[4].innerHTML = exampleList[i].과목명;
			x.style.float = 'right';
			x.style.border = "none";
			x.dataset.id = i;
			x.addEventListener('click', deleteList);
			table.children[exampleList[i].시간[2]].children[4].appendChild(x);
			break;
		case '금':
			table.children[exampleList[i].시간[2]].children[5].style.backgroundColor = colorSet[num];
			table.children[exampleList[i].시간[2]].children[5].style.borderBottom =
				`solid 0.5px ${colorSet[num]}`;
			table.children[exampleList[i].시간[4]].children[5].style.backgroundColor = colorSet[num];
			table.children[exampleList[i].시간[2]].children[5].innerHTML = exampleList[i].과목명;
			x.style.float = 'right';
			x.style.border = "none";
			x.dataset.id = i;
			x.addEventListener('click', deleteList);
			table.children[exampleList[i].시간[2]].children[5].appendChild(x);
			break;
		default:
			break;
	}
}

function undodecodingTime(i) {
	const table = document.querySelector('tbody');

	if (yourList.length != 0) {
		for (let j = 0; j < yourList.length; j++) {
			if (yourList[j].시간 == exampleList[i].시간) {
				return 0;
			}
		}
	}

	switch (exampleList[i].시간[0]) {
		case '월':
			table.children[exampleList[i].시간[2]].children[1].style.backgroundColor = '#f8f8f8';
			table.children[exampleList[i].시간[2]].children[1].style.border = 'solid 0.5px #bfbfbf';
			table.children[exampleList[i].시간[4]].children[1].style.backgroundColor = '#f8f8f8';
			table.children[exampleList[i].시간[2]].children[1].innerHTML = '';
			break;
		case '화':
			table.children[exampleList[i].시간[2]].children[2].style.backgroundColor = '#f8f8f8';
			table.children[exampleList[i].시간[2]].children[2].style.border = 'solid 0.5px #bfbfbf';
			table.children[exampleList[i].시간[4]].children[2].style.backgroundColor = '#f8f8f8';
			table.children[exampleList[i].시간[2]].children[2].innerHTML = '';
			break;
		case '수':
			table.children[exampleList[i].시간[2]].children[3].style.backgroundColor = '#f8f8f8';
			table.children[exampleList[i].시간[2]].children[3].style.border = 'solid 0.5px #bfbfbf';
			table.children[exampleList[i].시간[4]].children[3].style.backgroundColor = '#f8f8f8';
			table.children[exampleList[i].시간[2]].children[3].innerHTML = '';
			break;
		case '목':
			table.children[exampleList[i].시간[2]].children[4].style.backgroundColor = '#f8f8f8';
			table.children[exampleList[i].시간[2]].children[4].style.border = 'solid 0.5px #bfbfbf';
			table.children[exampleList[i].시간[4]].children[4].style.backgroundColor = '#f8f8f8';
			table.children[exampleList[i].시간[2]].children[4].innerHTML = '';
			break;
		case '금':
			table.children[exampleList[i].시간[2]].children[5].style.backgroundColor = '#f8f8f8';
			table.children[exampleList[i].시간[2]].children[5].style.border = 'solid 0.5px #bfbfbf';
			table.children[exampleList[i].시간[4]].children[5].style.backgroundColor = '#f8f8f8';
			table.children[exampleList[i].시간[2]].children[5].innerHTML = '';
			break;
		default:
			break;
	}
}

function addList(j) {
	let i = 0;

	do {
		if (yourList.length == 0) {
			yourList.push(exampleList[j]);
			decodingTime(j);
			return 0;
		} else if (yourList[i].과목번호 == exampleList[j].과목번호) {
			alert('이미 있어용');
			return 0;
		}
		i++;
	} while (i < yourList.length);

	yourList.push(exampleList[j]);
}

function deleteList(e) {
	console.log('before' + yourList);
	console.log(exampleList);

	for (let j = 0; j < yourList.length; j++) {
		console.log('j의 숫자는요' + j);
		if (yourList[j].과목번호 == exampleList[e.target.dataset.id].과목번호) {
			yourList.splice(j, 1);
		}
	}
	undodecodingTime(e.target.dataset.id);
	console.log('after' + yourList);
}

makeList();