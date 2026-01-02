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
    description?: string;
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
    description?: string;
    event: {
      time: string;
      addressLine1: string;
      addressLine2: string;
      mapUrl: string;
    };
  };
  timeline: {
    dressCode: string[];
    schedule: Array<{
      day: string;
      items: Array<{
        time: string;
        title: string;
        icon: string;
        type?: "bride" | "groom" | "both";
      }>;
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
    account: {
      ownerName: string;
      bankName: string;
      accountNumber: string;
      qrCode: string;
    };
  };
  images: {
    stairHero: string;
    saveTheDateMain: string;
    timelineTop: string;
    timelineBottom: string;
    brideMain: string;
    groomMain: string;
    familyPhoto?: string;
    processionMap?: string;
  };
  music: {
    audioUrl?: string;
    youtubeUrl: string;
  };
}

export const weddingConfig: WeddingConfig = {
  couple: {
    brideName: "Bảo Linh",
    groomName: "Thế Vũ",
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
    motherName: "Đinh Thị Ánh Tuyết",
    description: "Cô dâu Bảo Linh – điều dưỡng đang công tác tại Bệnh viện Đại học Y Hà Nội. Là người có cá tính, thẳng thắn, luôn được mọi người yêu mến bởi tinh thần trách nhiệm cao và sự tận tâm với nghề. Trong công việc, Bảo Linh cẩn trọng, chu đáo và hết lòng vì mọi người; ngoài đời, lại là người chân thành, vui vẻ và luôn lan tỏa năng lượng tích cực. Với kinh nghiệm chăm sóc không ít “ca khó”, cô dâu đã phát hiện ra một ca đặc biệt khó chữa mang tên Thế Vũ. Để giữ bí mật về ca khiến cô “bó tay”, cô dâu quyết định giữ ca này cho riêng mình và theo dõi trọn đời.",
    event: {
      time: "09:00, ngày 18/01/2026",
      addressLine1: "Số 11A xóm Trần Hưng Đạo II, lối vào từ tỉnh lộ 429",
      addressLine2: "Địa phận thôn Đồng Tiến, Xã Phượng Dực, TP Hà Nội",
      mapUrl: "https://www.google.com/maps/dir//11A+X%C3%B3m+Tr%E1%BA%A7n+H%C6%B0ng+%C4%90%E1%BA%A1o+2,+Ph%C6%B0%E1%BB%A3ng+D%E1%BB%B1c,+Ph%C3%BA+Xuy%C3%AAn,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@20.7937433,105.8389237,18z/data=!4m17!1m8!3m7!1s0x3135b45b5720b5b1:0xcf505ea61cfbf499!2zWMOzbSBUcuG6p24gSMawbmcgxJDhuqFvLCBQaMaw4bujbmcgROG7sWMsIFBow7ogWHV5w6puLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!3b1!8m2!3d20.7937433!4d105.8402112!16s%2Fg%2F11f6jrh8c9!4m7!1m0!1m5!1m1!1s0x3135b45b5720b5b1:0xcf505ea61cfbf499!2m2!1d105.8402112!2d20.7937433?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D",
    },
  },
  groomSide: {
    title: "Nhà trai",
    groomName: "Đinh Thế Vũ",
    fatherName: "Đinh Xuân Tuấn",
    motherName: "",
    description: "Chú rể Thế Vũ – kỹ sư phần mềm đang công tác tại Tập đoàn Viettel. Là người đàn ông có hoài bão lớn, sống trách nhiệm, luôn nghiêm túc trong công việc nhưng lại cực kỳ vui tính ngoài đời. Sở hữu khả năng “debug” không chỉ trong code mà còn trong cuộc sống hôn nhân tương lai, chú rể Thế Vũ được đánh giá là người đáng tin cậy, kiên nhẫn và luôn mang lại tiếng cười cho mọi người xung quanh. Điểm yếu duy nhất được ghi nhận cho đến nay là… đã chính thức “đầu hàng” trước cô dâu xinh đẹp.",
    event: {
      time: "09:00, ngày 18/01/2026",
      addressLine1: "Số 4 Trần Phú",
      addressLine2: "Thôn Thượng, Phượng Dực, Hà Nội",
      mapUrl: "https://www.google.com/maps/place/th%C3%B4n+Th%C6%B0%E1%BB%A3ng,+V%C4%83n+Ho%C3%A0ng,+Ph%C3%BA+Xuy%C3%AAn,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@20.7836807,105.843594,17z/data=!3m1!4b1!4m10!1m2!2m1!1zc-G7kSA0IFRy4bqnbiBQaMO6LCBUaMO0biBUaMaw4bujbmcsIFbEg24gSG_DoG5nLCBQaMO6IFh1ecOqbiwgSMOgIE7hu5lp!3m6!1s0x3135b44ec9343ebf:0xff002b15af12c8ea!8m2!3d20.7840852!4d105.8459098!15sCkhz4buRIDQgVHLhuqduIFBow7osIFRow7RuIFRoxrDhu6NuZywgVsSDbiBIb8OgbmcsIFBow7ogWHV5w6puLCBIw6AgTuG7mWmSAQxuZWlnaGJvcmhvb2TgAQA!16s%2Fg%2F1vxz72qq?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D",
    },
  },
  timeline: {
    dressCode: ["Trắng / Kem", "Xanh Rêu", "Nâu Ấm", "Hồng / Pink"],
    schedule: [
      {
        day: "Thứ 7, 17-01 (Ăn hỏi)",
        items: [
          { time: "14:05", title: "Xuất phát", icon: "car", type: "groom" },
          { time: "14:30 - 15:30", title: "Lễ ăn hỏi", icon: "rings", type: "bride" },
          { time: "17:00 - 19:00", title: "Tiệc chiêu đãi", icon: "champagne", type: "both" },
          { time: "19:00 - 20:30", title: "Đón khách", icon: "camera", type: "both" },
          { time: "20:30 - 22:00", title: "Bữa tiệc âm nhạc", icon: "music", type: "bride" },
        ]
      },
      {
        day: "Chủ Nhật, 18/01/2026",
        items: [
          { time: "09:30 - 11:30", title: "Tiệc chiêu đãi", icon: "champagne", type: "both" },
          { time: "13:30 - 14:15", title: "Chụp ảnh photobooth lấy ngay", icon: "camera", type: "bride" },
          { time: "14:15", title: "Xuất phát", icon: "car", type: "groom" },
          { time: "14:30 - 15:30", title: "Lễ vu quy", icon: "rings", type: "bride" },
          { time: "15:35", title: "Đưa dâu về nhà trai", icon: "car", type: "bride" },
          { time: "15:30 - 16:30", title: "Lễ thành hôn", icon: "rings", type: "groom" },
          { time: "Sau 16:30", title: "Chụp ảnh photobooth lấy ngay", icon: "camera", type: "groom" },
        ]
      }
    ],
  },
  calendar: {
    monthName: "Chủ Nhật, 18 Tháng 1",
    year: "2026",
    highlightDay: 18,
  },
  contacts: {
    bridePhone: "0352028686",
    groomPhone: "0868615662",
    zaloLink: "https://zalo.me/0352028686",
    brideFacebook: "https://m.me/baolinh.ha.7",
    groomFacebook: "https://m.me/thevu0911",
  },
  bankInfo: {
    account: {
      ownerName: "HÀ BẢO LINH",
      bankName: "VIB (Quốc Tế)",
      accountNumber: "629101998",
      qrCode: "/image/qr-code.jpg",
    },
  },
  images: {
    stairHero: "/image/DSC_1156.jpg",
    saveTheDateMain: "/image/DSC_0941.jpg",
    timelineTop: "/image/DSC_1181.jpg",
    timelineBottom: "/image/DSC_1234.jpg",
    processionMap: "/image/procession-map.png",
    brideMain: "/image/DSC_0459f.jpg",
    groomMain: "/image/DSC_1002.jpg",
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
