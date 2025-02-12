let password = "Hello123";

if (password.length < 6) {
    console.log("Password is too weak! ❌");
} else if (password.length >= 6 && password.length <= 10) {
    console.log("Password is medium. ⚠️");
} else {
    console.log("Password is strong! ✅");
}