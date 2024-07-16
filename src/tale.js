export function kolobok(person){
    let answer;
    switch(person){
        case 'дедушка':
            answer = 'Я от дедушки ушел';
            console.log(answer);
            return answer;
        case 'заяц':
            answer = 'Я от зайца убежал';
            console.log(answer);
            return answer;
        case 'лиса':
            answer = 'А вот от лисы не убежал';
            console.log(answer);
            return answer;
        default:
            answer = 'Я не знаю этого персонажа';
            console.log(answer);
            return answer;

    }
}

export function newYear(name){
    if(name == 'Снегурочка' || name == 'Дед Мороз')
        {console.log(`${name}!${name}!${name}!`)}
    else{console.warn('Такого персонажа не существует!')}
}