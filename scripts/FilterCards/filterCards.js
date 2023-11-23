// Фільтр карток:
// поле input для введення тексту пошуку за заголовком
// фільтр по статусу, по пріоритету)

export function CreateFormFilter() {

    const mainContainer = document.querySelector('.main-container')
    mainContainer.insertAdjacentHTML("beforeend", `
    
    <div class= "search__form-wrapper" >
        <form class ="search__form">
            <input type="text" name="search" placeholder="Search by title">
                <select name="" id="status">
                    <option value="all">All</option>
                    <option value="open">Open</option>
                    <option value="done">Done</option>
                </select>
                <select name="" id="urgency">
                    <option value="all">All</option>
                    <option value="hign">High</option>
                    <option value="norm">Normal</option>
                    <option value="low">Low</option>
                </select>
        </form>
    </div>
`)
}
CreateFormFilter()

function filterCards() {

}