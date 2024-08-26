// password-protect.js
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("passwordForm");
    var content = document.getElementById("protectedContent");
    content.style.display = "none";

    // 创建并插入表单元素
    var label = document.createElement("label");
    label.setAttribute("for", "password");
    label.textContent = "请输入密码：";
    form.appendChild(label);

    var input = document.createElement("input");
    input.setAttribute("type", "password");
    input.setAttribute("id", "password");
    form.appendChild(input);

    var button = document.createElement("button");
    button.setAttribute("id", "submitPassword");
    button.textContent = "提交";
    form.appendChild(button);

    // 添加事件监听器
    button.addEventListener("click", function() {
        var password = input.value;
        if (password === "qb-sb-quotation") {
            fetch('https://icer233.github.io/SB-Quotation-Content/index.html')
                .then(response => response.text())
                .then(data => {
                    var parser = new DOMParser();
                    var doc = parser.parseFromString(data, 'text/html');
                    var postContent = doc.querySelector('.post').innerHTML;
                    content.innerHTML = postContent;
                    content.style.display = "block";
                    form.style.display = "none";

                    // 加载CSS样式
                    var link = document.createElement("link");
                    link.rel = "stylesheet";
                    link.href = "https://icer233.github.io/assets/css/styles.css";
                    document.head.appendChild(link);
                })
                .catch(error => console.error('Error loading content:', error));
        } else {
            alert("密码错误，请重试！");
        }
    });
});
