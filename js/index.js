function categorySelected(categoryType){
    console.log(categoryType);
    sessionStorage.setItem("categoryType" , JSON.stringify(categoryType));
    window.location.href ="categories.html";
}