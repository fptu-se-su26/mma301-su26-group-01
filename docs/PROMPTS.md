# Prompt Log

## 1. Thông tin chung

| Thông tin | Nội dung |
|---|---|
| Môn học | Ứng dụng di động / Mobile App Development |
| Mã môn học |  |
| Lớp |  |
| Học kỳ | SU26 |
| Tên bài tập / Project | MyFirstProject |
| Tên sinh viên / Nhóm |  |
| MSSV / Danh sách MSSV |  |
| Giảng viên hướng dẫn |  |
| Ngày bắt đầu | 2026-05-16 |
| Ngày cập nhật gần nhất | 2026-05-16 |

---

## 2. Mục đích của file Prompt Log

File này ghi lại các prompt quan trọng đã dùng để thiết kế và rà soát màn hình đăng nhập Expo/React Native của dự án.

---

## 3. Công cụ AI đã sử dụng

- [x] ChatGPT
- [x] GitHub Copilot
- [ ] Gemini
- [ ] Claude
- [ ] Cursor
- [ ] Antigravity
- [ ] Microsoft Copilot
- [ ] Perplexity
- [ ] Công cụ khác: ....................................

---

## 4. Bảng tổng hợp prompt đã sử dụng

| STT | Ngày | Công cụ AI | Mục đích | Prompt tóm tắt | Kết quả chính | Có sử dụng vào bài không? | Minh chứng |
|---:|---|---|---|---|---|---|---|
| 1 | 2026-05-16 | ChatGPT | Design | Thiết kế màn hình đăng nhập cho app Expo/React Native | Gợi ý layout gồm header, form, nút đăng nhập, nút Google và notification card | Có | MyFirstProject/App.js |
| 2 | 2026-05-16 | GitHub Copilot | Code review | Rà soát component và style trong `App.js` | Gợi ý chia nhỏ layout, đặt tên biến rõ ràng, giữ style nhất quán | Có | MyFirstProject/App.js |

---

## 5. Prompt chi tiết

### Prompt số 1

| Nội dung | Thông tin |
|---|---|
| Ngày sử dụng | 2026-05-16 |
| Công cụ AI | ChatGPT |
| Mục đích | Thiết kế giao diện đăng nhập |
| Phần việc liên quan | Frontend |
| Mức độ sử dụng | Hỏi sinh code |

#### 5.1. Prompt nguyên văn

```text
Thiết kế một màn hình đăng nhập cho ứng dụng di động bằng Expo/React Native.
Màn hình cần có logo, tiêu đề chào mừng, ô nhập email sinh viên, ô nhập mật khẩu có nút hiện/ẩn mật khẩu, nút đăng nhập, nút đăng nhập bằng Google, và một khung thông báo ngắn ở phía dưới.
Ưu tiên giao diện rõ ràng, phù hợp cho sinh viên và có thể chạy tốt trên điện thoại.
```

#### 5.2. Bối cảnh khi viết prompt

```text
Nhóm đang xây dựng giao diện đầu tiên của MyFirstProject và cần một khung màn hình đăng nhập rõ ràng để bắt đầu từ đó.
```

#### 5.3. Kết quả AI trả về

```text
AI đề xuất chia giao diện thành header, welcome section, form card, divider, nút Google và notification box.
```

#### 5.4. Kết quả đã áp dụng vào bài

```text
Nhóm áp dụng gần như toàn bộ bố cục màn hình, đặc biệt là form đăng nhập, nút hiện/ẩn mật khẩu và khung thông báo.
```

#### 5.5. Phần sinh viên/nhóm đã chỉnh sửa hoặc cải tiến

```text
Nhóm đổi lại ngôn ngữ hiển thị sang tiếng Việt, chỉnh màu chủ đạo, giảm độ phức tạp và sắp xếp lại khoảng cách cho cân đối hơn.
```

#### 5.6. Đánh giá chất lượng prompt

- [x] Prompt rõ ràng
- [x] Prompt có đủ bối cảnh
- [ ] Prompt còn thiếu thông tin
- [x] Prompt tạo ra kết quả tốt
- [ ] Prompt tạo ra kết quả chưa phù hợp
- [ ] Cần hỏi lại AI nhiều lần
- [x] Cần tự kiểm tra và chỉnh sửa nhiều
- [ ] Kết quả AI có lỗi hoặc chưa chính xác

#### 5.7. Minh chứng liên quan

| Loại minh chứng | Nội dung |
|---|---|
| Link commit | Chưa cập nhật |
| File liên quan | MyFirstProject/App.js |
| Screenshot | Chưa cập nhật |
| Kết quả chạy/test | Đã rà soát lại code giao diện |
| Link tài liệu/báo cáo | docs/AI_AUDIT_LOG.md |
| Ghi chú khác | Dùng cho giao diện đăng nhập đầu tiên |

#### 5.8. Ghi chú thêm

```text
Prompt này đủ tốt để nhận được một layout có thể dùng ngay, nhưng vẫn cần chỉnh lại cho phù hợp với ngữ cảnh môn học và phong cách của nhóm.
```

---

### Prompt số 2

| Nội dung | Thông tin |
|---|---|
| Ngày sử dụng | 2026-05-16 |
| Công cụ AI | GitHub Copilot |
| Mục đích | Rà soát code React Native |
| Phần việc liên quan | Frontend |
| Mức độ sử dụng | Hỏi review |

#### 5.1. Prompt nguyên văn

```text
Kiểm tra lại màn hình đăng nhập React Native này và gợi ý cách tổ chức code, style, và các component để dễ đọc hơn.
```

#### 5.2. Bối cảnh khi viết prompt

```text
Sau khi có bản nháp đầu tiên, nhóm cần xem lại code để tránh việc component bị dài và khó bảo trì.
```

#### 5.3. Kết quả AI trả về

```text
AI gợi ý chia layout theo từng section, đặt tên biến mô tả hơn và gom style theo nhóm hợp lý.
```

#### 5.4. Kết quả đã áp dụng vào bài

```text
Nhóm giữ cách chia layout theo khối và dùng gợi ý về đặt tên rõ ràng để dễ theo dõi trong `App.js`.
```

#### 5.5. Phần sinh viên/nhóm đã chỉnh sửa hoặc cải tiến

```text
Nhóm tự kiểm tra lại hành vi của ô nhập mật khẩu, tinh chỉnh style, và đảm bảo giao diện chạy ổn trên Expo.
```

#### 5.6. Đánh giá chất lượng prompt

- [x] Prompt rõ ràng
- [x] Prompt có đủ bối cảnh
- [ ] Prompt còn thiếu thông tin
- [x] Prompt tạo ra kết quả tốt
- [ ] Prompt tạo ra kết quả chưa phù hợp
- [ ] Cần hỏi lại AI nhiều lần
- [x] Cần tự kiểm tra và chỉnh sửa nhiều
- [ ] Kết quả AI có lỗi hoặc chưa chính xác

#### 5.7. Minh chứng liên quan

| Loại minh chứng | Nội dung |
|---|---|
| Link commit | Chưa cập nhật |
| File liên quan | MyFirstProject/App.js |
| Screenshot | Chưa cập nhật |
| Kết quả chạy/test | Đã rà soát luồng render giao diện |
| Link tài liệu/báo cáo | docs/AI_AUDIT_LOG.md |
| Ghi chú khác | Dùng để kiểm tra chất lượng code |

#### 5.8. Ghi chú thêm

```text
Prompt review ngắn nhưng hữu ích vì giúp nhóm nhìn lại code dưới góc độ dễ đọc và dễ bảo trì hơn.
```