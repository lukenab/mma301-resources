# Slot 09 — My Daily Notes

[English](README.md) | Tiếng Việt

Ứng dụng ghi chú đơn giản được xây dựng bằng Expo và React Native.

## Chức năng

- Thêm, sửa và xóa ghi chú.
- Lưu ghi chú trên thiết bị bằng AsyncStorage.
- Chuyển giao diện sáng/tối.

## Yêu cầu

- Node.js từ 22.13 trở lên và npm.
- Android Studio có Android Emulator, hoặc điện thoại cài Expo Go tương thích SDK 57.

## Cài đặt

Mở PowerShell hoặc terminal trong VS Code tại thư mục gốc của repository:

```bash
cd demos/slot-09-my-daily-notes
npm install
npm start
```

Giữ terminal này chạy trong lúc sử dụng app.

## Chạy trên Android Emulator

1. Mở Android Studio → **Device Manager**.
2. Tạo thiết bị ảo nếu chưa có, sau đó khởi động thiết bị.
3. Trong terminal đang chạy Expo, nhấn **a** để mở app trên máy ảo.

## Chạy trên điện thoại

1. Cài Expo Go tương thích SDK 57.
2. Kết nối điện thoại và máy tính vào cùng mạng Wi-Fi.
3. Quét mã QR trong terminal bằng Expo Go trên Android hoặc ứng dụng Camera trên iPhone.

## Sử dụng ứng dụng

- Nhấn **+** để thêm ghi chú, nhập tiêu đề hoặc nội dung, rồi nhấn **dấu tích** để lưu.
- Nhấn vào ghi chú để chỉnh sửa.
- Nhấn **thùng rác** và xác nhận để xóa.
- Nhấn **mặt trăng/mặt trời** để đổi giao diện.

## React Native DevTools

Khi app đang chạy trên máy ảo hoặc điện thoại, nhấn **j** trong terminal Expo. Không cần cài riêng `react-devtools`.

- **Components:** xem props và state của component.
- **Console:** xem log và lỗi.
- **Sources:** đặt breakpoint để theo dõi quá trình thực thi.

Để thực hành, mở `screens/NoteDetailScreen.js` trong Sources và nhấn vào số dòng bên trong `handleSaveNote` để đặt breakpoint. Lưu một ghi chú trên thiết bị để code dừng tại đó, xem các biến, rồi nhấn **Resume** để tiếp tục.

DevTools cần runtime hỗ trợ debug. Nếu không kết nối được, hãy kiểm tra phiên bản Expo Go. Xem thêm [hướng dẫn debug của Expo](https://docs.expo.dev/debugging/tools/).
