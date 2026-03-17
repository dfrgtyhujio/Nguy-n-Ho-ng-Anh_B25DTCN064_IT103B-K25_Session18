let contacts = [
    {
        name: "Nguyễn Văn An",
        phone: "0901234567",
        email: "nguyenvanan@email.com"
    }  
];

function renderContacts() {
    let str = ""
    for (let i = 0; i < contacts.length; i++) {
        str += `<tr>
                <td>${i + 1}</td>
                <td>${contacts[i].name}</td>
                <td>${contacts[i].phone}</td>
                <td>${contacts[i].email}</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-edit" >Sửa</button>
                    <button class="btn-delete" onclick="deleteContact(${i})">Xóa</button>
                  </div>
                </td>
              </tr>`
    }
    document.getElementById("contact-tbody").innerHTML = str;
}
renderContacts();

function addContact() {
    let inputName = document.getElementById("contact-name")
    if (inputName.value.trim() === "") {
        alert("Họ tên không được để trống!");
        return;
    }
    if (inputName.value.length < 2) {
        alert("Họ tên phải có ít nhất 2 ký tự!");
        return;
    }

    let inputPhone = document.getElementById("contact-phone")
    if (inputPhone.value.trim() === "") {
        alert("Số điện thoại không được để trống!");
        return;
    }
    if (inputPhone.value.length < 10 || !inputPhone.value.startsWith("0") && !inputPhone.value.startsWith("+84")) {
        alert("Số điện thoại không hợp lệ! Vui lòng nhập số điện thoại 10 chữ số (bắt đầubằng 0) hoặc định dạng quốc tế (+84...)");
        return;
    }
    

    let inputEmail = document.getElementById("contact-email")
    if (inputEmail.value.trim() === "") {
        alert("Email không được để trống!");
        return;
    }
    if (!inputEmail.value.includes("@")) {
        alert("Email không hợp lệ!");
        return;
    }
    for (let index = 0; index < contacts.length; index++) {
        if (contacts[index].email === inputEmail.value) {
            alert("Email đã tồn tại trong danh bạ!");
            return;
        }
    }

    let newContact = {
        name: inputName.value,
        phone: inputPhone.value,
        email: inputEmail.value
    };

    contacts.push(newContact);
    renderContacts();
    inputName.value = "";
    inputPhone.value = "";
    inputEmail.value = "";

}

function deleteContact(index) {
    contacts.splice(index, 1);
    renderContacts();
}