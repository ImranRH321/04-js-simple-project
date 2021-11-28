// problem 1 ?
/* --------------------------
seerToMon
-----------------------------*/
function seerToMon(seer) {
    let mon = seer / 40;
    return mon;
    }
    let seer = 800;
    let myMon = seerToMon(seer);
    console.log('mon ', myMon);
    // ===========================================================
    // problem 2 ?
    /* ------------------
    totalSales
    -------------------*/
    function totalSales(shartQuantity, pantQuantity, shoesQuantity){
    const perShart = 100;
    const perpant = 200;
    const pershoes = 500;
    const perShartQuantity = shartQuantity * perShart;
    const perpantQuantity = pantQuantity * perpant;
    const perShoesQuantity = shoesQuantity * pershoes;
    const totalCart = perShartQuantity + perpantQuantity + perShoesQuantity;
    return totalCart;
    }
    const friestOption = totalSales(5, 2, 1);
    console.log(friestOption);
    // ====================================
    // problem 3 ?
    /*------------------
    delivaryCost
    ---------------------*/
    function deliveryCost(piece) {
    const friestDeliveryItem = 100;
    const secondDeliveryItem = 80;
    const restdDeliveryItem = 50;
    if (piece <= 100) {
    const count = piece * friestDeliveryItem;
    return count;
    }
    else if (piece <= 200) {
    const fristDress = 100 * friestDeliveryItem;
    const restPiece = piece - 100;
    const secodDress = restPiece * secondDeliveryItem;
    const totalpiece = fristDress + secodDress;
    return totalpiece;
    }
    else {
    const fristDress = 100 * friestDeliveryItem;
    const secodDress = 100 * secondDeliveryItem;
    const restpiece = piece - 200;
    const restDress = restpiece * restdDeliveryItem;
    const totalpiece = fristDress + secodDress + restDress;
    return totalpiece;
    }
    }
    const Dress = deliveryCost(202);
    console.log(Dress);
    // =======================
    // problem - 4 ?
    /* --------------------
    perfactFriend
    ---------------------------*/
    let names = ['imran', 'moonmoon', 'jaber ahamed', 'jhsojun'];
    function perfectFriend(names){
    for(let i = 0; i < names.length; i++){
    if(names[i].length == 5){
    return names[i];
    }
    }
    }
    console.log(perfectFriend(names));
