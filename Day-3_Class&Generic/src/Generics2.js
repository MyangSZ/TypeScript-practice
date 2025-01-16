// 제네릭 클래스
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Item_content, _UserRepository_users, _ProductRepository_products;
var Item = /** @class */ (function () {
    function Item() {
        _Item_content.set(this, void 0);
        __classPrivateFieldSet(this, _Item_content, null, "f");
    }
    Item.prototype.setItem = function (value) {
        __classPrivateFieldSet(this, _Item_content, value, "f");
    };
    Item.prototype.getItem = function () {
        return __classPrivateFieldGet(this, _Item_content, "f");
    };
    return Item;
}());
_Item_content = new WeakMap();
var numberItem = new Item();
numberItem.setItem(100);
numberItem.getItem(); // 100 반환
var stringItem = new Item();
stringItem.setItem("Hello");
stringItem.getItem(); // Hello 반환
var UserRepository = /** @class */ (function () {
    function UserRepository() {
        _UserRepository_users.set(this, []);
    }
    UserRepository.prototype.findById = function (id) {
        return __classPrivateFieldGet(this, _UserRepository_users, "f").find(function (user) { return user.id === id; });
    };
    UserRepository.prototype.save = function (user) {
        __classPrivateFieldGet(this, _UserRepository_users, "f").push(user);
    };
    return UserRepository;
}());
_UserRepository_users = new WeakMap();
var userRepo = new UserRepository();
userRepo.save({
    id: 1,
    name: "haha",
});
userRepo.save({
    id: 2,
    name: "hoho",
});
console.log(userRepo.findById(1));
var ProductRepository = /** @class */ (function () {
    function ProductRepository() {
        _ProductRepository_products.set(this, []);
    }
    ProductRepository.prototype.findById = function (Id) {
        return __classPrivateFieldGet(this, _ProductRepository_products, "f").find(function (product) { return product.id === Id; });
    };
    ProductRepository.prototype.save = function (product) {
        __classPrivateFieldGet(this, _ProductRepository_products, "f").push(product);
    };
    return ProductRepository;
}());
_ProductRepository_products = new WeakMap();
var productRepo = new ProductRepository();
productRepo.save({
    id: 10,
    price: 100,
    name: "hihi",
});
productRepo.save({
    id: 20,
    price: 200,
    name: "hoho",
});
console.log(productRepo.findById(20));
