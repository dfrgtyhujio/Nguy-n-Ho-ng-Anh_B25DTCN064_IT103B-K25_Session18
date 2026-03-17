let contacts = [
    {
        name: "Nguyễn Văn An",
        phone: "0901234567",
        email: "nguyenvanan@email.com"
    }
];

function renderContacts() {
    let str = "";
    for (let i = 0; i < contacts.length; i++) {
        str += `<tr>
                <td>${i + 1}</td>
                <td>${contacts[i].name}</td>
                <td>${contacts[i].phone}</td>
                <td>${contacts[i].email}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-edit" onclick="editContact(${i})">Sửa</button>
                        <button class="btn-delete" onclick="deleteContact(${i})">Xóa</button>
                    </div>
                </td>
            </tr>`;
    }
    document.getElementById("contact-tbody").innerHTML = str;
}
renderContacts();


function addContact() {
    let inputName = document.getElementById("contact-name").value.trim();
    let inputPhone = document.getElementById("contact-phone").value.trim();
    let inputEmail = document.getElementById("contact-email").value.trim();


    if (inputName === "") {
        alert("Họ tên không được để trống!");
        return;
    }

    if (inputName.length < 2) {
        alert("Họ tên phải có ít nhất 2 ký tự!");
        return;
    }

    if (inputPhone === "") {
        alert("Số điện thoại không được để trống!");
        return;
    }

    if (inputPhone.length < 10 || (!inputPhone.startsWith("0") && !inputPhone.startsWith("+84"))) {
        alert("Số điện thoại không hợp lệ! Vui lòng nhập số điện thoại 10 chữ số (bắt đầu bằng 0) hoặc định dạng quốc tế (+84...)");
        return;
    }

    if (isNaN(inputPhone)) {
        alert("Số điện thoại phải là số");
        return;
    }

    if (inputEmail === "") {
        alert("Email không được để trống!");
        return;
    }

    if (!inputEmail.includes("@") || !inputEmail.includes(".")) {
        alert("Email không hợp lệ!");
        return;
    }

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].email === inputEmail) {
            alert("Email đã tồn tại trong danh bạ!");
            return;
        }
    }
    let newContact = {
        name: inputName,
        phone: inputPhone,
        email: inputEmail
    };
    contacts.push(newContact);
    renderContacts();
}



function deleteContact(index) {
    let confirmDelete = confirm("Bạn có chắc muốn xóa?");
    if (confirmDelete) {
        contacts.splice(index, 1);
        renderContacts();
    }
}
