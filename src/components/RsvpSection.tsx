import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaComment } from 'react-icons/fa';
import { weddingConfig } from '../data/weddingConfig';

const RsvpSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    willAttend: 'yes',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('RSVP Data:', formData);
    alert('Cảm ơn bạn đã xác nhận! Chúng tôi sẽ liên hệ lại sớm nhất có thể.');
    // Reset form
    setFormData({
      name: '',
      phone: '',
      message: '',
      willAttend: 'yes',
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
    >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            BẠN SẼ ĐẾN CHỨ?
          </h2>
          <div className="w-24 h-1 bg-wedding-rose mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-2">
            Đám cưới của chúng tôi sẽ trọn vẹn hơn với sự hiện diện của Quý khách.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Vui lòng xác nhận thông tin dưới đây để gia đình chuẩn bị tiếp đón chu đáo. Trân trọng!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Tên của Quý khách <span className="text-wedding-rose">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Nhập tên của bạn"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-rose focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Số điện thoại
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Nhập số điện thoại"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-rose focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Gửi những lời chúc tốt đẹp nhất
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Nhập lời chúc hoặc gửi video chúc mừng"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-rose focus:border-transparent outline-none transition-all resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Bạn có đến không? <span className="text-wedding-rose">*</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="willAttend"
                  value="yes"
                  checked={formData.willAttend === 'yes'}
                  onChange={(e) => setFormData({ ...formData, willAttend: e.target.value })}
                  className="text-wedding-rose focus:ring-wedding-rose"
                />
                <span className="text-gray-700">Có, tôi sẽ đến</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="willAttend"
                  value="no"
                  checked={formData.willAttend === 'no'}
                  onChange={(e) => setFormData({ ...formData, willAttend: e.target.value })}
                  className="text-wedding-rose focus:ring-wedding-rose"
                />
                <span className="text-gray-700">Không, tôi không thể đến</span>
              </label>
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-6 py-3 bg-wedding-rose text-white rounded-lg shadow-lg hover:bg-wedding-pink transition-colors duration-300 font-medium"
          >
            Gửi xác nhận
          </motion.button>
        </motion.form>

        {/* Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <motion.a
            href={`tel:${weddingConfig.contacts.bridePhone}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300"
          >
            <FaPhone />
            <span>Gọi cô dâu</span>
          </motion.a>

          <motion.a
            href={`tel:${weddingConfig.contacts.groomPhone}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300"
          >
            <FaPhone />
            <span>Gọi chú rể</span>
          </motion.a>

          <motion.a
            href={weddingConfig.contacts.zaloLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            <FaComment />
            <span>Nhắn Zalo</span>
          </motion.a>
        </motion.div>
    </motion.section>
  );
};

export default RsvpSection;

