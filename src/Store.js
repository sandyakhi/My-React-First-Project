import { createSlice, configureStore } from '@reduxjs/toolkit';

// Product Slice
const productsSlice = createSlice({
  name: "products",
  initialState: {
      veg : [
      { name: "Potato", price: 100, image: "potato.jpeg.jpg" },
      { name: "Tomato", price: 80, image: "tomato.jpg" },
      { name: "Carrot", price: 50, image: "carrot.jpeg.jpg" },
      { name: "Beetroot", price: 120, image: "beetroot.jpeg.jpg" },
      { name: "Cucumber", price: 65, image: "cucu.jpeg.jpg" },
      { name: "Radish", price: 45, image: "radish.jpeg.jpg" },
      { name: "Brinjal", price: 150, image: "brinjal.jpeg.jpg" },
      { name: "Pumpkin", price: 85, image: "pumpin.jpeg.jpg" },
      { name: "Cabbage", price: 35, image: "cabbage.jpeg.jpg" },
      { name: "Capsicum", price: 170, image: "cap.jpeg.jpg" },
      { name: "Beans", price: 70, image: "beans.jpeg.jpg" },
      { name: "Spinach", price: 90, image: "spanish.jpeg.jpg" },
      { name: "Paneer", price: 90, image: "panner.jpeg.jpg" },
      { name: "Onion", price: 60, image: "onion.jpeg.jpg" },
      { name: "Garlic", price: 200, image: "garlic.jpeg.jpg" },
      { name: "Ginger", price: 150, image: "ginger.jpeg.jpg" },
      { name: "Broccoli", price: 180, image: "bro.jpeg.jpg" },
      { name: "Cauliflower", price: 100, image: "cauli.jpeg.jpg" },
      { name: "Bitter Gourd", price: 55, image: "bitter.jpeg.jpg" },
      { name: "Bottle Gourd", price: 50, image: "bottle.jpeg.jpg" },
      { name: "Lettuce", price: 120, image: "lettuce.jpeg" },
      { name: "Sweet Corn", price: 90, image: "sweetcorn.jpg" },
      { name: "Green Peas", price: 130, image: "greenpeas.jpeg.jpg" },
      { name: "Spring Onion", price: 75, image: "spring.jpeg.jpg" },
      { name: "Zucchini", price: 160, image: "zucchin.jpeg.jpg" },
      { name: "Mushroom", price: 190, image: "mush.jpeg.jpg" },
      { name: "Drumstick", price: 85, image: "drum.jpeg.jpg" },
      { name: "Fenugreek Leaves", price: 60, image: "fennu.jpeg.jpg" },
      { name: "Coriander Leaves", price: 40, image: "cori.jpeg.jpg" },
      { name: "Mint Leaves", price: 50, image: "mint.jpeg" },
      { name: "Turnip", price: 70, image: "tumpi.jpeg.jpg" },
      { name: "Yam", price: 90, image: "yam.jpeg.jpg" },
      { name: "Celery", price: 130, image: "celeri.jpeg.jpg" },
      { name: "Okra", price: 80, image: "okra.jpeg.jpg" },
      { name: "Chilli", price: 95, image: "greenchilli.jpeg.jpg" },
      { name: "Redchilli", price: 85, image: "redchilli.jpeg.jpg" },
      { name: "Asparagus", price: 175, image: "asparagus.jpeg.jpg" },
      { name: "Squash", price: 110, image: "squash.jpeg.jpg" },
      { name: "Radicchio", price: 140, image: "radicchio.jpeg.jpg" },
    ],
    
    Nonveg : [
      { name: "Fish", price: 300, image: "fish.jpeg.jpg" },
      { name: "Chicken", price: 120, image: "chicken.jpeg.jpg" },
      { name: "Mutton", price: 200, image: "mutton.jpeg.jpg" },
      { name: "Crabs", price: 560, image: "crabs.jpeg.jpg" },
      { name: "Prawns", price: 500, image: "prawn.jpeg.jpg" },
      { name: "Goat Curry", price: 350, image: "goat.jpeg.jpg" },
      { name: "Kababs", price: 230, image: "kababs.jpeg.jpg" },
      { name: "Egg Fry", price: 290, image: "egg.jpeg.jpg" },
      { name: "Chicken Manchuria", price: 550, image: "manchuria.jpeg" },
      { name: "Liver Fry", price: 200, image: "liver.jpeg" },
      { name: "Fried Fish", price: 400, image: "friedfish.jpeg.jpg" },
      { name: "Butter Chicken", price: 450, image: "butterchicken.jpeg.jpg" },
      { name: "Tandoori Chicken", price: 600, image: "tandoori.jpeg.jpg" },
      { name: "Mutton Biryani", price: 700, image: "muttonbiryani.jpeg.jpg" },
      { name: "Chicken Biryani", price: 350, image: "chickenbiryani.jpeg.jpg" },
      { name: "Prawn Curry", price: 500, image: "prawn curry.jpeg.jpg" },
      { name: "Crab Masala", price: 650, image: "crabmasala.jpeg.jpg" },
      { name: "Fish Curry", price: 320, image: "fishcurry.jpeg.jpg" },
      { name: "Mutton Korma", price: 550, image: "muttonkorma.jpeg.jpg" },
      { name: "Chicken 65", price: 400, image: "chicken65.jpeg.jpg" },
      { name: "Paya Soup", price: 350, image: "payasoup.jpeg.jpg" },
      { name: "Mutton Chops", price: 450, image: "muttonchops.jpeg.jpg" },
      { name: "Chicken Curry", price: 320, image: "chickencurry.jpeg.jpg" },
      { name: "Egg Curry", price: 250, image: "eggcurry.jpeg.jpg" },
      { name: "Beef Steak", price: 800, image: "beef.jpeg.jpg" },
      { name: "Gongura Mutton", price: 400, image: "gongura.jpeg.jpg" },
      { name: "Chicken Pakora", price: 300, image: "chickenpakora.jpeg.jpg" },
      { name: "Mutton Rogan Josh", price: 650, image: "muttonjosh.jpeg.jpg" },
      { name: "Shrimp Tempura", price: 600, image: "tampura.jpeg.jpg" },
      { name: "Lobster Thermidor", price: 1200, image: "lobaster.jpeg" },
      { name: "Fish Tikka", price: 480, image: "fishtikka.jpeg.jpg" },
      { name: "Tandoori Prawns", price: 700, image: "tandooriprwns.jpeg.jpg" },
      { name: "Goat Kebab", price: 400, image: "goatkabab.jpg" },
      { name: "Grilled Chicken", price: 500, image: "grilledchicken.jpeg.jpg" },
      { name: "Chicken Nuggets", price: 300, image: "chickennuggets.jpeg.jpg" },
      { name: "Baked Salmon", price: 900, image: "bakedsalmon.jpeg" },
      { name: "Duck Roast", price: 850, image: "duckroast.jpeg.jpg" },
      { name: "Crab Roast", price: 700, image: "crabroast.jpeg.jpg" },
      { name: "BBQ Chicken", price: 450, image: "bbq.jpeg.jpg" },
      { name: "Chicken Drumsticks", price: 380, image: "chickendrumstick.jpeg.jpg" },
      { name: "Mutton Keema", price: 600, image: "mutton keema.jpeg.jpg" },
     
    ],
   Sweets : [
    { name: "Badhusha", price: 80, image: "badhusha.jpeg.jpg" },
    { name: "Palacova", price: 100, image: "palacova.jpeg" },
    { name: "Mysore Pak", price: 90, image: "mysore.jpeg" },
    { name: "Laddu", price: 75, image: "laddu.jpeg" },
    { name: "Jalebi", price: 85, image: "jilebi.jpeg.jpg" },
    { name: "Halwa", price: 95, image: "halwa.jpeg.jpg" },
    { name: "Rasgulla", price: 70, image: "rasgulla.jpeg.jpg" },
    { name: "Gulab Jamun", price: 80, image: "gulabjamun.jpeg.jpg" },
    { name: "Soan Papdi", price: 65, image: "soan.jpeg.jpg" },
    { name: "Kaju Katli", price: 120, image: "kaju.jpeg.jpg" },
    { name: "Peda", price: 75, image: "peda.jpeg.jpg" },
    { name: "Malpua", price: 90, image: "malpua.jpeg" },
    { name: "Cham Cham", price: 85, image: "cham.jpeg.jpg" },
    { name: "Kalakand", price: 100, image: "kalakand.jpeg.jpg" },
    { name: "Sandesh", price: 95, image: "sandesh.jpeg.jpg" },
    { name: "Modak", price: 110, image: "modaka.jpeg" },
    { name: "Puran Poli", price: 130, image: "poli.jpeg.jpg" },
    { name: "Milk Cake", price: 115, image: "milk.jpeg" },
    { name: "Coconut Barfi", price: 90, image: "barfi.jpeg.jpg" },
    { name: "Besan Laddu", price: 85, image: "laddu.jpeg" },
    { name: "Motichoor Laddu", price: 95, image: "motichur.jpeg.jpg" },
    { name: "Dry Fruit Halwa", price: 120, image: "dryfruit.jpeg.jpg" },
    { name: "Anjeer Barfi", price: 150, image: "anjeer.jpeg" },
    { name: "Khoya Barfi", price: 100, image: "khoya.jpeg.jpg" },
    { name: "Chhena Poda", price: 130, image: "chenna.jpeg.jpg" },
    { name: "Rabri", price: 140, image: "rabri.jpeg.jpg" },
    { name: "Ghevar", price: 160, image: "ghever.jpeg.jpg" },
    { name: "Double Ka Meetha", price: 90, image: "double.jpeg.jpg" },
    { name: "Shahi Tukda", price: 100, image: "shahi.jpeg.jpg" },
    { name: "Kheer", price: 80, image: "kheer.jpeg.jpg" },
    { name: "Payasam", price: 90, image: "payasam.jpeg.jpg" },
    { name: "Phirni", price: 85, image: "phirni.jpeg.jpg" },
    { name: "Basundi", price: 110, image: "basundi.jpeg.jpg" },
    { name: "Balushahi", price: 95, image: "balu.jpeg.jpg" },
    { name: "Nankhatai", price: 75, image: "nan.jpeg.jpg" },
    { name: "Til Laddu", price: 70, image: "till.jpeg.jpg" },
    { name: "Gur Rewri", price: 80, image: "gur.jpeg.jpg" },
    { name: "Pista Barfi", price: 125, image: "pista.jpeg.jpg" },
    { name: "Rose Kalakand", price: 130, image: "rosekal.jpeg.jpg" },
    { name: "Chocolate Barfi", price: 140, image: "chocobarfi.jpeg.jpg" },
    { name: "Fruit Halwa", price: 150, image: "fruit.jpeg.jpg" },
    { name: "Carrot Halwa", price: 100, image: "carrothalwa.jpeg.jpg" },
    { name: "Chilakalu", price: 95, image: "chilakalu.jpeg.jpg" },
    { name: "Milk Mysore Pak", price: 120, image: "milkmysore.jpeg.jpg" },
    { name: "Ice Halwa", price: 140, image: "ice halwa.jpeg.jpg" },
   
   ]
  },

  reducers: {}
});

// Cart Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increament: (state, action) => {
      const item = state.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      }
    },
    decreament: (state, action) => {
      const item = state.find(item => item.name === action.payload.name);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        return state.filter(item => item.name !== action.payload.name);
      }
    },
    remove: (state, action) => {
      return state.filter(item => item.name !== action.payload.name);
    },
    clearCart: () => []
  }
});

// Purchase Slice
const purchaseSlice = createSlice({
  name: 'purchasedetails',
  initialState: [],
  reducers: {
    addPurchaseDetails: (state, action) => {
      state.push({ ...action.payload });
    }
  }
});

// Auth Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: localStorage.getItem("username") ? true : false,
    user: localStorage.getItem("username") || "",
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("username", action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = "";
      localStorage.removeItem("username");
    }
  }
});

// Store Configuration
const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    purchasedetails: purchaseSlice.reducer,
    auth: authSlice.reducer 
  }
});

// Export Actions
export const { addPurchaseDetails } = purchaseSlice.actions;
export const { addToCart, increament, decreament, remove, clearCart } = cartSlice.actions;
export const { login, logout } = authSlice.actions; 

export default store;