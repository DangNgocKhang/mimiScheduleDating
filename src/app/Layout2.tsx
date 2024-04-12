"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsFlower3 } from "react-icons/bs";

export default function Layout2() {
  const [moveToRight, setMoveToRight] = useState<number>(0);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const scrollPosition = divRef.current.scrollTop;
        const scrollHeight = divRef.current.scrollHeight;
        const clientHeight = divRef.current.clientHeight;
        const maxScrollValue = scrollHeight - clientHeight;
        const percent = Math.round((scrollPosition / maxScrollValue) * 100);
        setMoveToRight(percent);
      }
    };

    if (divRef.current) {
      divRef.current.addEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="flex-1 flex flex-col justify-center items-center overflow-x-hidden">
      <div className="w-3/4 h-[230px] sticky top-0 bg-mimi-pink-light overflow-x-hidden">
        <div>
          <Image
            src="/moto1.png"
            width={250}
            height={250}
            alt="Picture of the author"
            className="animate-cuteBounce absolute left-0 bottom-0 z-10 mb-4"
            style={{ left: `${moveToRight}%` }}
          />
        </div>
        <div>
          <Image
            src="/road1.png"
            width={1900}
            height={45}
            alt="Picture of the author"
            className=" absolute left-0 bottom-0"
          />
        </div>
      </div>
      <div
        className="bg-white flex-1 min-h-0 w-3/4  overflow-y-scroll drop-shadow-lg"
        ref={divRef}
      >
        <div className="h-14 w-full bg-mimi-pink-medium flex items-center justify-center text-3xl font-semibold font-Merienda text-mimi-pink-light sticky top-0">
          Introoooooooo
        </div>
        <div className="min-h-full h-max w-full bg-[url('/bg.jpg')] px-6 py-10 flex flex-col gap-10">
          <div className=" font-Kufi font-semibold text-3xl text-mimi-pink-text">
            <div>Hilo mimi, anh ngiu của em đâyyyyy ♥</div>
            <div className="my-4">
              Sau bao ngày chờ đợi thì cuối cùng cũng sắp đến ngày gặp nhau rùi
              kkk.
            </div>
            <div>
              Như đã bàn tính trước đó, thì anh sẽ đi chợ chuẩn bị đồ ăn trước
              nhé! Còn những thứ còn lại thì tụi mình sẽ cùng chuẩn bị ♥
            </div>
            <div className="mt-4">
              Sau đây sẽ là lịch trình chi tiết của ngày hôm đó nhéeee
            </div>
          </div>
        </div>
        <div className="h-14 w-full bg-mimi-pink-medium flex items-center justify-center text-3xl font-semibold font-Merienda text-mimi-pink-light sticky top-0">
          07:00 - 11:30
        </div>
        <div className="min-h-full h-max w-full bg-[url('/bg.jpg')] px-6 py-10 flex flex-col gap-10">
          <div className="flex justify-start items-start font-Kufi font-semibold text-3xl text-mimi-pink-text">
            <BsFlower3 className=" mr-4" />
            <div>
              <div>
                07:00: Anh sẽ đón nàng nhé ♥ rồi chúng ta đi cafe bệt ở công
                viên Tao Đàn
              </div>
              <div className="text-xl font-normal">
                Sẵn tiện thì mình ghé mua xôi mặn luôn nhé{" "}
              </div>
            </div>
          </div>

          <div className="flex justify-start items-start font-Kufi font-semibold text-3xl text-mimi-pink-text">
            <BsFlower3 className=" mr-4" />
            <div>
              <div>09:45: Mình sẽ đi lấy bánh mì phô mai</div>
              <div className="text-xl font-normal">
                Địa chỉ: 61 Nguyễn Thượng Hiền, Phường 5, Quận Bình Thạnh
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start font-Kufi font-semibold text-3xl text-mimi-pink-text">
            <BsFlower3 className=" mr-4" />
            <div>
              <div>11:10: Ghé cửa hàng tiện lợi để mua đồ ăn vặt</div>
              <div className="text-xl font-normal">
                Một vài món cần mua: Nước ép sữa chua lên men đào, nước suối,
                bánh flan,...
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start font-Kufi font-semibold text-3xl text-mimi-pink-text">
            <BsFlower3 className=" mr-4" />
            <div>
              <div>
                Sau đó thì chúng ta sẽ di chuyển đến Hôme Nào Staycation
              </div>
              <div className="text-xl font-normal">
                Địa chỉ: 185/2B Phạm Văn Chiêu, Phường 14, Quận Gò Vấp
              </div>
            </div>
          </div>
        </div>
        <div className="h-14 w-full bg-mimi-pink-medium flex items-center justify-center text-3xl font-semibold font-Merienda text-mimi-pink-light sticky top-0">
          11:30 - 20:00
        </div>
        <div className="min-h-full h-max w-full bg-[url('/bg.jpg')] px-6 py-10 flex flex-col gap-10">
          <div className="flex justify-start items-start font-Kufi font-semibold text-3xl text-mimi-pink-text">
            <BsFlower3 className=" mr-4" />
            <div>
              <div>Check-innnnnn</div>
              <div className="text-xl font-normal">Số phòng: 202 </div>
            </div>
          </div>
          <div className="flex justify-start items-start font-Kufi font-semibold text-3xl text-mimi-pink-text">
            <BsFlower3 className=" mr-4" />
            <div>
              <div>11:30: Sơ chế đồ ăn và nghỉ ngơi</div>
              <div className="text-xl font-normal">
                Anh sẽ sơ chế đồ ăn còn bé iu nghỉ ngơi đi ọoo kkkk
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start font-Kufi font-semibold text-3xl text-mimi-pink-text">
            <BsFlower3 className=" mr-4" />
            <div>
              <div>
                12:15: Nấu cơm và ăn cơm, tất nhiên sau đó anh sẽ là người rửa
                chén rùi
              </div>
              <div className="text-xl font-normal">
                Thực đơn bữa cơm sẽ có: Thịt sốt me, Súp lơ áp chảo, Canh bí đỏ
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start font-Kufi font-semibold text-3xl text-mimi-pink-text">
            <BsFlower3 className=" mr-4" />
            <div>
              <div>13:30: Nghỉ trưa</div>
              <div className="text-xl font-normal">
                Khúc này chúng mình ngủ ít hoi nha kkk
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start font-Kufi font-semibold text-3xl text-mimi-pink-text">
            <BsFlower3 className=" mr-4" />
            <div>
              <div>
                14:30: Dậy nàoooo!! Chúng mình sẽ ăn bánh flan và coi phim nhéee
              </div>
              <div className="text-xl font-normal">
                Bộ phim mình sẽ coi: GONE GIRL - 2014
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start font-Kufi font-semibold text-3xl text-mimi-pink-text">
            <BsFlower3 className=" mr-4" />
            <div>
              <div>16:30: Sinh hoạt tự dooo</div>
              <div className="text-xl font-normal">
                Lúc này tụi mình sẽ ngồi review lại 1 tháng qua xem có gì cần
                sửa hong để bic mà sửa nhéee
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start font-Kufi font-semibold text-3xl text-mimi-pink-text">
            <BsFlower3 className=" mr-4" />
            <div>
              <div>20:00: Check-outttt</div>
            </div>
          </div>
        </div>
        <div className="h-14 w-full bg-mimi-pink-medium flex items-center justify-center text-3xl font-semibold font-Merienda text-mimi-pink-light sticky top-0">
          Outrooooooooo
        </div>
        <div className="min-h-full h-max w-full bg-[url('/bg.jpg')] px-6 py-10 flex flex-col gap-10  justify-center items-center">
          <div className=" font-Kufi font-semibold text-3xl text-mimi-pink-text text-center">
            <div>
              Mong là buổi đi chơi này sẽ để lại cho xinh iu nhiều kỉ niệm và 
              niềm vui nhé ♥
            </div>
            <div className="mt-6 font-normal text-2xl">Kí tên: Ngọc Khang</div>
          </div>
        </div>
      </div>
    </div>
  );
}
