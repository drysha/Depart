import './style.css'
const News = () => {
    return <>
        <div className={'department_description'}>
            <div className={'department_description_name'}>Опиание направлений и специальностей</div>
            <div className={'department_description_blocks'}>
                <div className={'department_description_block_of_information'}>
                    <div className={'bloc_information_about_grade'}>6.44.03.01 - БАКАЛАВРИАТ</div>
                    <div className={'bloc_information_about_direction'}> <span>Направление</span> - Педагогическое образование
                        <br/> <span> Профиль </span> - Информатика и информационные технологий в образовании </div>
                    <div className={'bloc_information_about_period1'}>
                        <div><span>4 года</span><br/>срок освоения</div>
                        <div><span>очно</span><br/>форма обучения</div>
                        <div><span>-бюджет<br/>-договор</span></div>
                    </div>
                </div>
                <div className={'department_description_block_of_information'}>
                    <div className={'bloc_information_about_grade'}>6.44.04.01 - МАГИСТРАТУРА</div>
                    <div className={'bloc_information_about_direction'}><span>Направление</span> - Педагогическое образование
                        <br/> <span> Профиль </span>- Информатика и информационные технологий в образовании </div>
                    <div className={'bloc_information_about_period2'}>
                        <span>2 года (очно)</span> или <span>2 года 3 месяца</span> (заочно) срок освоения<br/><span>- договор</span>
                    </div>
                </div>
                <div className={'department_description_block_of_information'}>
                    <div className={'bloc_information_about_grade'}>2.09.03.04 - БАКАЛАВРИАТ</div>
                    <div className={'bloc_information_about_direction'}><span>Направление</span> - Программная инженерия
                        <br/> <span> Профиль </span> - Разработка программно- информационных систем </div>
                    <div className={'bloc_information_about_period2'}>
                        <span>4 года (очно)</span> или <span>4 года 8 месяцев</span> (заочно) срок освоения<br/><span>- бюджет / - договор</span>
                    </div>
                </div>
                <div className={'department_description_block_of_information'}>
                    <div className={'bloc_information_about_grade'}>2.09.04.04 - МАГИСТРАТУРА</div>
                    <div className={'bloc_information_about_direction'}><span>Направление</span> - Программная инженерия
                        <br/> <span> Профиль </span> - Разработка программно- информационных систем </div>
                    <div className={'bloc_information_about_period1'}>
                        <div><span>2 года 6 месяцев</span><br/>срок освоения</div>
                        <div><span>заочно</span><br/>форма обучения</div>
                        <div><span>-договор</span></div>
                    </div>
                </div>
            </div>

        </div>
    </>
}

export default News