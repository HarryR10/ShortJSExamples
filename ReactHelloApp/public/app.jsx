ReactDOM.render(
    <h1>React</h1>,
    document.getElementById('node') //по этому id ищем, куда вставляется этот рендер
);

///////////////

//сначала объявляем функции, с помощью которых будет происходить рендер:
//по сути - это один и тот же код, Heading == Desc
const HeadingItem = (props) => {
    const Heading = props.tagType
    return <Heading>{props.headingText}</Heading>
}

const DescriptionItem = (props) => {
    const Desc = props.tagType
    return <Desc>{props.descriptionText}</Desc>

    //ничто не мешает поместить текст в обычные теги
    // return <h1>{props.descriptionText}</h1>
}
//две верхние вызываются из SectionItem


const SectionItem_ex = (props) => (
    <section className='item'>
        <HeadingItem
            headingText={props.headingText}
            tagType={props.headingTagType}
        />

        <DescriptionItem
            descriptionText={props.descriptionText}
            tagType={props.descriptionTagType}
        />
    </section>
)
//SectionItem вызывается из ReactDOM.render


ReactDOM.render(
    //div, т.к. может вернуть только 1 элемент разметки
    //className - специфично для React, class - для обычной HTML разметки
    //происходит вызов функции как элемента разметки <название аргумент, аргумент2>
    //с атрибутами вместо аргументов.
    <div className='wrapper'>
        <SectionItem_ex
            //ниже описаны JSX атрибуты:
            headingText='HTML'
            headingTagType='h1'
            descriptionText='Transforms into the DOM'
            descriptionTagType='p'
        />

        <SectionItem_ex
            headingText='CSS'
            headingTagType='h2'
            descriptionText='Style DOM-elements'
            descriptionTagType='quote'
        />

        <SectionItem_ex
            headingText='JavaScript'
            headingTagType='h3'
            descriptionText='Adds interactivity to elements'
            descriptionTagType='div'
        />
    </div>,

    document.getElementById('root')
)

///////////////
//свой пример:
const DoSomething = (props) => {
    const Something = props.tagType;
    return (
        <div>
            <h1>This is</h1>
            <Something>REALY SOMETHING</Something>
        </div>
    );
}

ReactDOM.render(
    <DoSomething
        tagType='h2'
    />,

    document.getElementById('something')
    //эта строка должна быть обязательно!
);