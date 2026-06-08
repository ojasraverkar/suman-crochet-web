export const products = [
    {
        id: "b12",
        category: "bookmarks",
        title: "Red Flower Leaf Bookmark",
        desc: "Beautiful handmade crochet flower bookmark crafted with premium yarn. A unique floral page marker and thoughtful gift for readers, students, and book lovers.",
        price: 100,
        colors: ["Red"],
        materials: ["Premium yarn"],
        imageId: "./assets/images/flower_leaf_bookmark_red.png"
    },
    {
        id: "b13",
        category: "bookmarks",
        title: "Blue Flower Leaf Bookmark",
        desc: "Beautiful handmade crochet flower bookmark crafted with premium yarn. A unique floral page marker and thoughtful gift for readers, students, and book lovers.",
        price: 100,
        colors: ["Blue"],
        materials: ["Premium yarn"],
        imageId: "./assets/images/flower_leaf_bookmark_blue.png"
    },
    {
        id: "b14",
        category: "bookmarks",
        title: "Sunflower Bookmark",
        desc: "Handcrafted sunflower crochet bookmark made with premium yarn. A unique floral page marker and thoughtful gift for readers, students, teachers, and book lovers.",
        price: 100,
        colors: ["Yellow", "Green"],
        materials: ["Premium yarn"],
        imageId: "./assets/images/sunflower_bookmark.png"
    },
    {
        id: "b15",
        category: "bookmarks",
        title: "Peacock Feather Bookmark",
        desc: "Beautiful handmade peacock feather crochet bookmark featuring vibrant colors and an elegant tassel. A unique gift for readers, students, teachers, and book lovers who appreciate handcrafted accessories.",
        price: 150,
        colors: ["Royal Blue", "Green", "Gold"],
        materials: ["Premium yarn"],
        imageId: "./assets/images/peacock_bookmark.png"
    },
    {
        id: "b16",
        category: "bookmarks",
        title: "Rose Bookmark",
        desc: "Beautiful handmade rose crochet bookmark crafted with premium yarn. A charming floral page marker and thoughtful gift for readers, students, teachers, and book lovers.",
        price: 150,
        colors: ["Royal Red", "Green"],
        materials: ["Premium yarn"],
        imageId: "./assets/images/rose_bookmark.png"
    },
    {
        id: "e01",
        category: "earrings",
        title: "White Fan Earrings",
        desc: "Elegant handmade crochet fan earrings featuring delicate white crochet work and vibrant red bead accents. Lightweight, stylish, and perfect for casual wear, festive occasions, and gifting.",
        price: 100,
        colors: ["White", "Red"],
        materials: ["Premium yarn", "Beads"],
        imageId: "./assets/images/white_fan_earnings.png"
    },
    {
        id: "e02",
        category: "earrings",
        title: "Ocean Bloom Earrings",
        desc: "Beautiful handmade crochet earrings featuring a delicate blue and white floral design with elegant bead accents. Lightweight, stylish, and perfect for everyday wear, festive occasions, and gifting.",
        price: 150,
        colors: ["Blue", "White"],
        materials: ["Premium yarn", "Beads"],
        imageId: "./assets/images/ocean_bloom_earrings.png"
    },
    {
        id: "e03",
        category: "earrings",
        title: "Petal Dew Earrings",
        desc: "Beautiful handmade crochet earrings featuring a delicate blue and white teardrop design with elegant pearl accents. Lightweight, stylish, and perfect for everyday wear, special occasions, and gifting.",
        price: 150,
        colors: ["Blue", "White"],
        materials: ["Premium yarn", "Pearl"],
           imageId: "./assets/images/petal_dew_earrings.png"
    }
];

export function getImageUrl(id) {
    if (!id || id.trim() === "" || id.includes("G_DRIVE_IMAGE_ID")) {
        return "";
    }
    if (id.startsWith("./") || id.startsWith("assets/") || /\.(jpe?g|png|gif|webp)$/i.test(id)) {
        return id;
    }
    return `https://drive.google.com/uc?export=view&id=${id}`;
}
