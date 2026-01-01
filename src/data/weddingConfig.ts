export interface WeddingConfig {
  couple: {
    brideName: string;
    groomName: string;
  };
  mainDate: {
    isoString: string;
    display: string;
    day: string;
    month: string;
    year: string;
  };
  brideSide: {
    title: string;
    brideName: string;
    fatherName: string;
    motherName: string;
    event: {
      time: string;
      addressLine1: string;
      addressLine2: string;
      mapUrl: string;
    };
  };
  groomSide: {
    title: string;
    groomName: string;
    fatherName: string;
    motherName: string;
    event: {
      time: string;
      addressLine1: string;
      addressLine2: string;
      mapUrl: string;
    };
  };
  timeline: {
    dressCode: string[];
    items: Array<{
      time: string;
      title: string;
      icon: string;
    }>;
  };
  calendar: {
    monthName: string;
    year: string;
    highlightDay: number;
  };
  contacts: {
    bridePhone: string;
    groomPhone: string;
    zaloLink: string;
    brideFacebook: string;
    groomFacebook: string;
  };
  bankInfo: {
    brideAccount: {
      ownerName: string;
      bankName: string;
      accountNumber: string;
    };
    groomAccount: {
      ownerName: string;
      bankName: string;
      accountNumber: string;
    };
  };
  images: {
    stairHero: string;
    saveTheDateMain: string;
    timelineTop: string;
    timelineBottom: string;
    brideMain: string;
    groomMain: string;
    familyPhoto: string;
  };
  music: {
    audioUrl?: string;
    youtubeUrl: string;
  };
}

export const weddingConfig: WeddingConfig = {
  couple: {
    brideName: "Hà Bảo Linh",
    groomName: "Đinh Thế Vũ",
  },
  mainDate: {
    isoString: "2026-01-18T09:00:00+07:00",
    display: "09:00 - Ngày 18 Tháng 01 Năm 2026",
    day: "18",
    month: "01",
    year: "2026",
  },
  brideSide: {
    title: "Nhà gái",
    brideName: "Hà Bảo Linh",
    fatherName: "Hà Khắc Huynh",
    motherName: "Đinh Thị Tuyết",
    event: {
      time: "09:00, ngày 18/01/2026",
      addressLine1: "11A Trần Hưng Đạo 2",
      addressLine2: "Thôn Đồng Tiến, Phượng Dực, Hà Nội",
      mapUrl: "https://maps.google.com/",
    },
  },
  groomSide: {
    title: "Nhà trai",
    groomName: "Đinh Thế Vũ",
    fatherName: "Đinh Xuân Tuấn",
    motherName: " ",
    event: {
      time: "09:00, ngày 18/01/2026",
      addressLine1: "Số 4 Trần Phú",
      addressLine2: "Thôn Thượng, Phượng Dực, Hà Nội",
      mapUrl: "https://maps.google.com/",
    },
  },
  timeline: {
    dressCode: ["Trắng / Kem", "Xanh Rêu", "Nâu Ấm"],
    items: [
      { time: "09:00", title: "Đón khách", icon: "camera" },
      { time: "09:30", title: "Lễ cưới", icon: "rings" },
    ],
  },
  calendar: {
    monthName: "THÁNG 1",
    year: "2026",
    highlightDay: 18,
  },
  contacts: {
    bridePhone: "0352028686",
    groomPhone: "0868615662",
    zaloLink: "https://zalo.me/0352028686",
    brideFacebook: "https://www.facebook.com/baolinh.ha.7",
    groomFacebook: "https://www.facebook.com/thevu0911",
  },
  bankInfo: {
    brideAccount: {
      ownerName: "Ha Bao Linh",
      bankName: "Vietcombank",
      accountNumber: "0301000372155",
    },
    groomAccount: {
      ownerName: "Dinh The Vu",
      bankName: "TPBank",
      accountNumber: "01083707001",
    },
  },
  images: {
    stairHero: "/image/DSC_1645.jpg",
    saveTheDateMain: "/image/DSC_0941.jpg",
    timelineTop: "/image/DSC_1181.jpg",
    timelineBottom: "/image/DSC_1234.jpg",
    brideMain: "/image/codau.jpg",
    groomMain: "/image/DSC_1421.jpg",
    familyPhoto: "/image/DSC_0976.jpg",
  },
  music: {
    // Đặt file MP3 vào public/music/ và cập nhật đường dẫn
    // Hoặc dùng direct link từ CDN/cloud storage
    audioUrl: "/music/bai-nay-khong-de-di-dien.mp3", // File MP3 từ Zing MP3
    youtubeUrl: "https://www.youtube.com/watch?v=NOiI0sqiRoE",
    // Lưu ý: Zing MP3 không cho embed trực tiếp, cần download MP3 và đặt vào public/music/
    // Tên bài hát: "Bài này không dễ để đi diễn" - Anh Tú & Atus
  },
};
