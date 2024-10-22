var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
document.addEventListener('DOMContentLoaded', function () {
    function displayError(inputId, message) {
        var Errorinput = document.getElementById(inputId);
        if (Errorinput) {
            Errorinput.style.borderColor = "red";
            Errorinput.placeholder = message;
        }
    }
    function displaySuccess(inputId) {
        var suceedInput = document.getElementById(inputId);
        if (suceedInput) {
            suceedInput.style.borderColor = "green";
            suceedInput.placeholder = '';
            suceedInput.classList.add('valid');
        }
    }
    var validEmail = function (email) {
        var re = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
        return re.test(String(email).toLowerCase());
    };
    var form = document.getElementById('formDetails');
    var ModalBtn = document.getElementById('closeModal');
    var modal = document.getElementById('successModal');
    var formStatus = document.getElementById('formStatus');
    var container = document.querySelector('.container');
    //Modal closing
    ModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });
    if (form) {
        //form Submission
        form.addEventListener('submit', function (event) { return __awaiter(_this, void 0, void 0, function () {
            var nameInput, name, emailInput, email, contactInput, contact, subjectInput, subject, messageInput, message, isvalid, formData, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        nameInput = document.getElementById('name');
                        name = nameInput ? nameInput.value : '';
                        emailInput = document.getElementById('email');
                        email = emailInput ? emailInput.value : '';
                        contactInput = document.getElementById('contact');
                        contact = contactInput ? contactInput.value : '';
                        subjectInput = document.getElementById('subject');
                        subject = subjectInput ? subjectInput.value : '';
                        messageInput = document.getElementById('message');
                        message = messageInput ? messageInput.value : '';
                        isvalid = true;
                        if (!name) {
                            displayError('name', 'Name is Required');
                            isvalid = false;
                        }
                        else {
                            displaySuccess('name');
                        }
                        if (!email || !validEmail(email)) {
                            displayError('email', 'Email is Required');
                            isvalid = false;
                        }
                        else {
                            displaySuccess('email');
                        }
                        if (!contact || contact.length < 10) {
                            displayError('contact', 'Mobile number is Required');
                            isvalid = false;
                        }
                        else {
                            displaySuccess('contact');
                        }
                        if (!subject || subject.length < 3) {
                            displayError('subject', 'Subject is Required');
                            isvalid = false;
                        }
                        else {
                            displaySuccess('subject');
                        }
                        if (!message || message.length < 3) {
                            displayError('message', 'Message is Required');
                            isvalid = false;
                        }
                        else {
                            displaySuccess('message');
                        }
                        if (!isvalid) return [3 /*break*/, 4];
                        formData = {
                            name: name,
                            email: email,
                            contact: contact,
                            subject: subject,
                            message: message
                        };
                        console.log(formData);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fetch('https://6716738b3fcb11b265d27849.mockapi.io/contactUS/users', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(formData)
                            })];
                    case 2:
                        response = _a.sent();
                        if (response.ok) {
                            form.reset();
                            formStatus.innerHTML = '';
                            formStatus.classList.remove("error");
                            modal.style.display = "block";
                            container.style.backgroundColor = "smokewhite";
                        }
                        else {
                            throw new Error('network was not ok');
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        formStatus.style.display = "block";
                        formStatus.innerHTML = "Submission Failed.<br>Try Again!!";
                        formStatus.classList.add("error");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    }
    else {
        formStatus.textContent = 'Please fill out all fields correctly.';
        formStatus.classList.add("error");
    }
});
