const bookmarkProducts = [
    {
        id: "b1",
        category: "reading",
        title: "Classic Lace Bookmark",
        desc: "Meticulously woven corner-mark, structural and gentle on pages.",
        price: 250,
        colors: ["Cream", "Gold"],
        materials: ["Cotton", "Lace"],
        imageId: "./assets/images/bookmarks/IMG_20260423_180012.jpg"
    },
    {
        id: "b2",
        category: "reading",
        title: "Sprout Book Pointer",
        desc: "A playful, vibrant green leaf sprout pushing up out of your chapters.",
        price: 185,
        colors: ["Green", "White"],
        materials: ["Cotton", "Thread"],
        imageId: "./assets/images/bookmarks/IMG20260424220108.jpg"
    },
    {
        id: "b3",
        category: "reading",
        title: "Aurora Ribbon Bookmark",
        desc: "Soft-toned bookmark woven with premium cotton and a bright ribbon edge.",
        price: 220,
        colors: ["Pink", "Peach"],
        materials: ["Cotton", "Ribbon"],
        imageId: "./assets/images/bookmarks/IMG_20260423_192047.jpg"
    },
    {
        id: "b4",
        category: "reading",
        title: "Petal Lace Corner",
        desc: "Delicate lace bookmark crafted to keep your favorite page with style.",
        price: 210,
        colors: ["Ivory", "Blush"],
        materials: ["Cotton", "Lace"],
        imageId: "./assets/images/bookmarks/IMG_20260423_193936.jpg"
    },
    {
        id: "b5",
        category: "reading",
        title: "Midnight Thread Bookmark",
        desc: "Dark and dramatic, designed for novel lovers who appreciate bold contrast.",
        price: 260,
        colors: ["Black", "Silver"],
        materials: ["Cotton", "Thread"],
        imageId: "./assets/images/bookmarks/IMG_20260424_220147.jpg"
    },
    {
        id: "b6",
        category: "reading",
        title: "Sunrise Crochet Marker",
        desc: "A warm sunrise palette inspired bookmark for daily reading rituals.",
        price: 240,
        colors: ["Yellow", "Coral"],
        materials: ["Cotton", "Thread"],
        imageId: "./assets/images/bookmarks/IMG_20260424_220519.jpg"
    },
    {
        id: "b7",
        category: "reading",
        title: "Golden Stitch Bookmark",
        desc: "Bright and cheerful bookmark stitched with bold, happy colors.",
        price: 230,
        colors: ["Gold", "Orange"],
        materials: ["Cotton", "Thread"],
        imageId: "./assets/images/bookmarks/IMG_20260424_223137.jpg"
    },
    {
        id: "b8",
        category: "reading",
        title: "Vintage Floral Marker",
        desc: "Soft floral details make this bookmark perfect for cafe reads.",
        price: 255,
        colors: ["Rose", "Green"],
        materials: ["Cotton", "Embroidery"],
        imageId: "./assets/images/bookmarks/IMG_20260425_211108.jpg"
    },
    {
        id: "b9",
        category: "reading",
        title: "Pastel Story Ribbon",
        desc: "Light, airy pastel bookmark that blends beautifully with any book.",
        price: 205,
        colors: ["Lavender", "Mint"],
        materials: ["Cotton", "Ribbon"],
        imageId: "./assets/images/bookmarks/IMG_20260425_211153.jpg"
    },
    {
        id: "b10",
        category: "reading",
        title: "Whimsy Thread Bookmark",
        desc: "A fun, whimsical bookmark with playful texture and shape.",
        price: 198,
        colors: ["Pink", "White"],
        materials: ["Cotton", "Thread"],
        imageId: "./assets/images/bookmarks/IMG_20260425_211250.jpg"
    },
    {
        id: "b11",
        category: "reading",
        title: "Classic Crochet Strip",
        desc: "A timeless hand-crocheted bookmark that pairs well with every book.",
        price: 235,
        colors: ["Cream", "Beige"],
        materials: ["Cotton", "Thread"],
        imageId: "./assets/images/bookmarks/IMG_20260425_211339.jpg"
    }
];

const earringsImages = [
    "IMG-20250917-WA0012.jpeg",
    "IMG-20250918-WA0001.jpeg",
    "IMG20250703233715.jpg",
    "IMG20250703233817.jpg",
    "IMG20250703233935.jpg",
    "IMG20250703234200.jpg",
    "IMG20250703234455.jpg",
    "IMG20250703234529.jpg",
    "IMG20250703234631.jpg",
    "IMG_20250703_234744.jpg",
    "IMG_20250703_234758.jpg",
    "IMG_20250703_234813.jpg",
    "IMG_20250703_234836.jpg",
    "IMG_20250703_234848.jpg",
    "IMG_20250821_141104.jpg",
    "IMG_20250821_141125.jpg",
    "IMG_20250821_141147.jpg",
    "IMG_20250821_141224.jpg",
    "IMG_20250821_141254.jpg",
    "IMG_20250821_141322.jpg",
    "IMG_20250822_221828.jpg",
    "IMG_20250822_222143.jpg",
    "IMG_20250822_222544.jpg",
    "IMG_20250921_202956.jpg",
    "IMG_20250921_203115.jpg",
    "IMG_20250921_203323.jpg",
    "IMG_20250924_140029.jpg",
    "IMG_20251003_140831.jpg",
    "IMG_20251003_142317.jpg",
    "IMG_20251003_143454.jpg",
    "IMG_20251003_143538.jpg",
    "IMG_20251003_143601.jpg",
    "IMG_20251003_143626.jpg",
    "IMG_20251009_230619.jpg",
    "IMG_20251011_114631.jpg",
    "IMG_20251011_114720.jpg",
    "IMG_20251011_114937.jpg",
    "IMG_20251011_115107.jpg",
    "IMG_20251102_182402.jpg",
    "IMG_20251102_184445.jpg",
    "IMG_20251128_110301.jpg",
    "IMG_20251128_110906.jpg",
    "IMG_20251128_112726.jpg",
    "IMG_20251128_114644.jpg",
    "IMG_20251128_125644.jpg",
    "IMG_20251201_124002.jpg",
    "IMG_20251216_132132.jpg",
    "IMG_20251216_133306.jpg",
    "IMG_20260102_112820.jpg",
    "IMG_20260102_112854.jpg",
    "IMG_20260103_184343.jpg",
    "IMG_20260110_122350.jpg",
    "IMG_20260127_233500.jpg",
    "IMG_20260323_121318.jpg"
];

const hairAccessoryImages = [
    "IMG20260220164816.jpg",
    "IMG20260220164841.jpg",
    "IMG20260220164856.jpg",
    "IMG20260220164906.jpg",
    "IMG20260228113444.jpg",
    "IMG_20260103_184434.jpg",
    "IMG_20260108_135453.jpg",
    "IMG_20260110_124935.jpg",
    "IMG_20260110_125132.jpg",
    "IMG_20260110_125553.jpg",
    "IMG_20260110_130517.jpg",
    "IMG_20260202_110339.jpg",
    "IMG_20260204_135835.jpg",
    "IMG_20260206_140014.jpg",
    "IMG_20260315_143415.jpg",
    "IMG_20260315_175635.jpg",
    "IMG_20260315_175935.jpg",
    "IMG_20260315_180422.jpg",
    "IMG_20260318_104708.jpg",
    "IMG_20260417_233951.jpg",
    "IMG_20260417_234020.jpg",
    "IMG_20260417_234040.jpg",
    "IMG_20260417_234106.jpg",
    "IMG_20260417_234152.jpg",
    "IMG_20260417_234221.jpg",
    "IMG_20260417_234252.jpg",
    "IMG_20260417_234321.jpg",
    "IMG_20260417_234341.jpg",
    "IMG_20260417_234358.jpg",
    "IMG_20260417_234420.jpg",
    "IMG_20260417_234444.jpg",
    "IMG_20260417_234506.jpg",
    "IMG_20260417_234525.jpg",
    "IMG_20260417_234543.jpg",
    "IMG_20260417_234607.jpg",
    "IMG_20260417_234636.jpg",
    "IMG_20260417_234702.jpg",
    "IMG_20260417_234755.jpg",
    "IMG_20260417_234818.jpg",
    "IMG_20260417_234843.jpg",
    "IMG_20260417_234909.jpg",
    "IMG_20260417_234944.jpg",
    "IMG_20260417_235007.jpg",
    "IMG_20260417_235030.jpg",
    "IMG_20260417_235049.jpg",
    "IMG_20260417_235109.jpg",
    "IMG_20260417_235127.jpg",
    "IMG_20260417_235146.jpg",
    "IMG_20260417_235206.jpg",
    "IMG_20260417_235227.jpg"
];

const toyImages = [
    "FB_IMG_1765126477789.jpg",
    "FB_IMG_1765126513491.jpg",
    "IMG-20250210-WA0001.jpg",
    "IMG-20250210-WA0003.jpg",
    "IMG-20250212-WA0000.jpg",
    "IMG-20250212-WA0001.jpg",
    "IMG-20250212-WA0003.jpg",
    "IMG-20250213-WA0005.jpg",
    "IMG-20250213-WA0006.jpg",
    "IMG-20250213-WA0007.jpg",
    "IMG-20250215-WA0003.jpg",
    "IMG-20250215-WA0004.jpg",
    "IMG-20250215-WA0005.jpg",
    "IMG20251216113341.jpg",
    "IMG20251216113354.jpg",
    "IMG_20250212_161927.jpg",
    "IMG_20251205_135124.jpg",
    "IMG_20251216_113232.jpg",
    "IMG_20251216_113322.jpg",
    "IMG_20251216_113442.jpg"
];

function deriveTitleFromFile(file, fallbackPrefix, index) {
    const base = file.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ').trim();
    if (!base) {
        return `${fallbackPrefix} ${String(index + 1).padStart(2, '0')}`;
    }
    return base
        .split(/\s+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

function pickColorGroup(index, groups) {
    return groups[index % groups.length];
}

export const products = [
    ...bookmarkProducts,
    ...earringsImages.map((file, index) => ({
        id: `e${index + 1}`,
        category: "accessories",
        title: deriveTitleFromFile(file, 'Earrings', index),
        desc: "Delicately handcrafted earrings for everyday elegance.",
        price: 240 + (index % 4) * 30,
        colors: pickColorGroup(index, [["Gold", "Pearl"], ["Pink", "Coral"], ["Ivory", "Blue"], ["Lavender", "Silver"]]),
        materials: ["Cotton", "Beads"],
        imageId: `./assets/images/earrings/${file}`
    })),
    ...hairAccessoryImages.map((file, index) => ({
        id: `h${index + 1}`,
        category: "accessories",
        title: deriveTitleFromFile(file, 'Hair Accessory', index),
        desc: "Soft handmade hair accessory for stylish comfort.",
        price: 180 + (index % 5) * 25,
        colors: pickColorGroup(index, [["Pink", "White"], ["Black", "Gold"], ["Peach", "Olive"], ["Blue", "Cream"], ["Red", "Beige"]]),
        materials: ["Cotton", "Elastic"],
        imageId: `./assets/images/hair_accesories/${file}`
    })),
    ...toyImages.map((file, index) => ({
        id: `t${index + 1}`,
        category: "toys",
        title: deriveTitleFromFile(file, 'Toy', index),
        desc: "Cute crochet toy made for play and display.",
        price: 320 + (index % 5) * 35,
        colors: pickColorGroup(index, [["Blue", "Yellow"], ["Red", "White"], ["Green", "Brown"], ["Pink", "Purple"], ["Gray", "Ivory"]]),
        materials: ["Cotton", "Polyfill"],
        imageId: `./assets/images/toys/${file}`
    }))
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
