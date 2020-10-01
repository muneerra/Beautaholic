function categorySelected(categoryType){
    console.log(categoryType);
    localStorage.setItem("categoryType" , JSON.stringify(categoryType));
    window.location.href ="categories.html";
}