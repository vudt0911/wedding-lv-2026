import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaHeart, FaGift, FaCopy } from 'react-icons/fa';
import { weddingConfig } from '../data/weddingConfig';

const InvitationSection = () => {
    const [guestName, setGuestName] = useState("");
    const [isGiftOpen, setIsGiftOpen] = useState(false);
    const [amount, setAmount] = useState("");
    const [copied, setCopied] = useState<string | null>(null);

    // Parse guest name from URL
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const name = params.get('name');
            setGuestName(name || "Bạn và Người thương");
        }
    }, []);

    const copyToClipboard = (text: string, type: string) => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(null), 2000);
    };

    // Generate dynamic QR code based on amount
    // Using VietQR API: https://img.vietqr.io/image/<BANK_ID>-<ACCOUNT_NO>-<TEMPLATE>.png?amount=<AMOUNT>&addInfo=<CONTENT>
    // Bank ID for VIB is 'VIB'
    const bankId = 'VIB';
    const accountNo = weddingConfig.bankInfo.account.accountNumber;
    const template = 'compact';
    const description = `Mung cuoi ${weddingConfig.couple.brideName} ${weddingConfig.couple.groomName}`;
    const cleanAmount = amount.replace(/[^0-9]/g, '');

    const dynamicQrUrl = cleanAmount
        ? `https://img.vietqr.io/image/${bankId}-${accountNo}-${template}.png?amount=${cleanAmount}&addInfo=${encodeURIComponent(description)}&accountName=${encodeURIComponent(weddingConfig.bankInfo.account.ownerName)}`
        : weddingConfig.bankInfo.account.qrCode;

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Format currency display
        const value = e.target.value.replace(/[^0-9]/g, '');
        if (value) {
            setAmount(parseInt(value).toLocaleString('vi-VN'));
        } else {
            setAmount("");
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl bg-white p-6 md:p-8 shadow-[0_18px_40px_rgba(15,23,42,0.12)] space-y-8 border border-stone-100"
        >
            {/* Invitation Text */}
            <div className="text-center space-y-6">
                <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-wedding-pink/30 flex items-center justify-center text-wedding-rose animate-pulse">
                        <FaHeart className="text-2xl" />
                    </div>
                </div>

                <div className="space-y-2">
                    <p className="text-gray-500 uppercase tracking-widest text-xs font-semibold">Trân trọng kính mời</p>
                    <h2 className="text-2xl md:text-4xl font-script text-wedding-rose font-bold py-2">
                        {guestName}
                    </h2>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed md:text-lg">
                    <p>Đến dự bữa tiệc chung vui cùng gia đình chúng tôi tại <span className="font-bold text-gray-900">Tư Gia</span></p>

                    <div className="bg-stone-50 py-4 px-6 rounded-2xl border border-stone-100 inline-block w-full">
                        <p>Vào lúc <span className="font-bold text-xl text-gray-900">10:00</span></p>
                        <div className="w-12 h-px bg-wedding-rose/50 mx-auto my-3"></div>
                        <p className="font-semibold text-gray-800">Chủ nhật, ngày 18/01/2026</p>
                        <p className="text-sm text-gray-500 mt-1">(Tức ngày 30/11/2025 Âm lịch)</p>
                    </div>

                    <p className="italic text-gray-600 px-4">
                        "Sự hiện diện của quý khách là niềm vui và vinh hạnh cho gia đình chúng tôi"
                    </p>
                </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            {/* Wishes & Gift Section */}
            <div className="text-center space-y-6">
                <p className="text-gray-700 font-medium">
                    Mọi lời chúc mừng và yêu thương được gửi tại đây
                </p>

                <div className="flex justify-center">
                    <motion.div
                        className="w-full max-w-sm"
                        initial={{ scale: 0.95 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                    >
                        {!isGiftOpen ? (
                            <button
                                onClick={() => setIsGiftOpen(true)}
                                className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-wedding-pink to-pink-100 p-8 shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
                            >
                                <div className="flex flex-col items-center gap-4">
                                    <motion.div
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="text-5xl text-wedding-rose drop-shadow-sm"
                                    >
                                        <FaGift />
                                    </motion.div>
                                    <span className="font-bold text-gray-800 text-lg group-hover:text-wedding-rose transition-colors">
                                        Gửi quà mừng
                                    </span>
                                    <span className="text-xs text-gray-500">Chạm để mở</span>
                                </div>
                            </button>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="rounded-2xl bg-stone-50 border border-stone-100 p-6 shadow-inner"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-bold text-gray-800">Thông tin mừng cưới</h3>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setIsGiftOpen(false); }}
                                        className="text-gray-400 hover:text-gray-600 p-1"
                                    >
                                        ✕
                                    </button>
                                </div>

                                {/* Input Amount Feature */}
                                <div className="mb-4 text-left">
                                    <label className="text-xs font-semibold text-gray-500 ml-1 mb-1 block">Nhập số tiền (VND)</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={amount}
                                            onChange={handleAmountChange}
                                            placeholder="..."
                                            className="w-full rounded-xl border-gray-200 bg-white py-2.5 pl-4 pr-12 text-sm shadow-sm focus:border-wedding-rose focus:ring-wedding-rose font-medium text-gray-800"
                                        />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-bold">VND</span>
                                    </div>
                                    <p className="text-[10px] text-gray-400 mt-1.5 ml-1 italic">
                                        * Mã QR sẽ tự động cập nhật theo số tiền
                                    </p>
                                </div>

                                {/* Dynamic QR */}
                                <div className="mb-6 p-3 bg-white rounded-xl shadow-sm border border-stone-100">
                                    <img
                                        src={dynamicQrUrl}
                                        alt="QR Code"
                                        className="w-full h-auto object-contain rounded-lg"
                                        key={cleanAmount} // Force refresh when amount changes
                                    />
                                </div>

                                {/* Bank Info */}
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between items-center py-2 border-b border-gray-200 border-dashed">
                                        <span className="text-gray-500">Ngân hàng</span>
                                        <span className="font-bold text-gray-800">{weddingConfig.bankInfo.account.bankName}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-200 border-dashed">
                                        <span className="text-gray-500">Chủ TK</span>
                                        <span className="font-bold text-gray-800 uppercase">{weddingConfig.bankInfo.account.ownerName}</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="text-gray-500">Số TK</span>
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono font-bold text-wedding-rose text-base">
                                                {weddingConfig.bankInfo.account.accountNumber}
                                            </span>
                                            <button
                                                onClick={() => copyToClipboard(weddingConfig.bankInfo.account.accountNumber, 'acc')}
                                                className="text-gray-400 hover:text-wedding-rose"
                                            >
                                                <FaCopy />
                                            </button>
                                        </div>
                                    </div>
                                    {copied === 'acc' && <p className="text-green-600 text-xs text-right animate-pulse">Đã sao chép!</p>}
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default InvitationSection;
