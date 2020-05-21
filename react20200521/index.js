exports.getName = function () {

    let lastNameList = ["张", "李", "孙", "王", "冯"];
    let firstNameList = ["国", "光", "广", "海", "倍"];

    let lastName = lastNameList[(Math.floor(Math.random() * 5))];
    let firstName1 = firstNameList[(Math.floor(Math.random() * 5))];
    let firstName2 = firstNameList[(Math.floor(Math.random() * 5))];

    return [lastName, firstName1, firstName2].join("");


}