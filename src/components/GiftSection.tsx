import { motion } from 'framer-motion';
import { FaGift, FaCopy } from 'react-icons/fa';
import { weddingConfig } from '../data/weddingConfig';
import { useState } from 'react';

const GiftSection = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl bg-gradient-to-br from-wedding-cream to-wedding-pink p-5 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="flex justify-center mb-4">
          <FaGift className="text-4xl text-wedding-rose" />
        </div>
        <h2 className="text-3xl md:text-5xl font-script text-gray-800 mb-4">
          Mừng Cưới
        </h2>
        <div className="w-24 h-1 bg-wedding-rose mx-auto mb-6"></div>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Nếu bạn không thể đến tham dự nhưng vẫn muốn gửi lời chúc, chúng tôi rất cảm kích!
        </p>
      </motion.div>

      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {!isOpen ? (
            <div
              onClick={() => setIsOpen(true)}
              className="p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-stone-50 transition-colors group"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="mb-6 text-6xl text-wedding-rose drop-shadow-md group-hover:scale-110 transition-transform"
              >
                <FaGift />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Hộp Quà Mừng</h3>
              <p className="text-gray-500 text-center text-sm">Chạm vào hộp quà để mở thông tin</p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="p-6 bg-white"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Cảm ơn tấm lòng của bạn</h3>
                <p className="text-xs text-gray-500">Quét mã QR hoặc sao chép thông tin bên dưới</p>
              </div>

              {/* QR Code */}
              <div className="mb-6 flex justify-center">
                <div className="p-2 border-2 border-wedding-rose/20 rounded-xl bg-white shadow-sm">
                  <img
                    src={weddingConfig.bankInfo.account.qrCode}
                    alt="QR Code Ngân Hàng"
                    className="w-48 h-48 object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Bank Details */}
              <div className="space-y-4 bg-stone-50 p-4 rounded-xl border border-stone-100">
                {/* Bank Name */}
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-sm text-gray-500">Ngân hàng</span>
                  <span className="font-semibold text-gray-800 text-right">{weddingConfig.bankInfo.account.bankName}</span>
                </div>

                {/* Owner */}
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-sm text-gray-500">Chủ tài khoản</span>
                  <span className="font-semibold text-gray-800 text-right uppercase">{weddingConfig.bankInfo.account.ownerName}</span>
                </div>

                {/* Account Number */}
                <div className="flex justify-between items-center pt-1">
                  <span className="text-sm text-gray-500">Số tài khoản</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-lg text-wedding-rose">
                      {weddingConfig.bankInfo.account.accountNumber}
                    </span>
                    <button
                      onClick={() => copyToClipboard(weddingConfig.bankInfo.account.accountNumber, 'account')}
                      className="p-1.5 bg-white text-wedding-rose rounded-md shadow-sm hover:bg-wedding-rose hover:text-white transition-all"
                      title="Sao chép"
                    >
                      <FaCopy size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {copied === 'account' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-center"
                >
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    ✓ Đã sao chép số tài khoản
                  </span>
                </motion.div>
              )}

              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 w-full py-2 text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                Đóng lại
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GiftSection;

