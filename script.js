var data = [];
var html = '';

$("#btn-add").click(function() { /* เมื่อปุ่ม add ถูกคลิ๊กให้ทำงานฟังก์ชั่น */
    html = ''; /* ให้ html เป็นค่าว่าง */
    data.push($("#txt").val()); /* คำสั่ง push ยัดอาเรย์จาก text เข้าไปเก็บ .val */
    console.log(data);

    for(var i=0;i<data.length;i++){ /* เงื่อนไขลุปดึงข้อมูลออกมา */
        html += `
                <div id="${i}" class="items">
                    <p>${data[i]}</p>
                    <div class="btn-control">
                        <div onclick="edit(${i})" class="btn-edit">แก้ไข</div>
                        <div onclick="del(${i})" class="btn-delete">ลบ</div>
                    </div>
                </div>
        `;
        
    }
    $("#items-control").html(html); /* แสดงผล */
    $("#txt").val(""); /* เซ้ตให้เป็นค่าว่างเมื่อพิมพ์เสร็จ */
});

    function del(id){ /* ลบข้อมูล ดึงจากไอดีอาเรย์ */
        data.splice(id,1); /* ลบตำแหน่งอิงจาก id แล้วลบไปอีก 1 ตำแหน่ง */
        html = '';

        for(var i=0;i<data.length;i++){ /* เงื่อนไขลุปดึงข้อมูลออกมา */
            html += `
            <div id="${i}" class="items">
                <p>${data[i]}</p>
                <div class="btn-control">
                    <div onclick="edit(${i})" class="btn-edit">แก้ไข</div>
                    <div onclick="del(${i})" class="btn-delete">ลบ</div>
                </div>
            </div>
        `;
        }
        $("#items-control").html(html);
    }

    function edit(id) { 
        html = '';
        for(var i=0;i<data.length;i++){
            if (id == i) { /* เช็คข้อมูลว่า id ที่แก้เท่ากับ i ไหม ถ้าใช่ให้ทำการแก้ไข*/
                html += ` 
                    <div class="items" id="edit-${i}">
                        <input type="text" class="txt-edit" value="${ $("#"+i+" p").text()}"> 
                        <div class="btn-control">
                        <div onclick="save(${i})" class="btn-save">บันทึก</div>
                        </div>
                    </div> 
                `;
                /* value="${ $("#"+i+" p").text()} ดึงข้อมูลก่อนหน้ามาแสดง */
            }
            else {/* ถ้าไม่ใช่ให้ทำการแสดงข้อมูลตัวอื่นมาปกติ */
                html += `
                <div id="${i}" class="items">
                    <p>${data[i]}</p>
                    <div class="btn-control">
                        <div onclick="edit(${i})" class="btn-edit">แก้ไข</div>
                        <div onclick="del(${i})" class="btn-delete">ลบ</div>
                    </div>
                </div>
            `;
            }
        }
        $("#items-control").html(html);
    }

    function save(id){
        html = '';
        for(var i=0;i<data.length;i++){ /* เงื่อนไขลุปดึงข้อมูลออกมา */
            if(id == i ){ /* ถ้าไอดีที่แก้ เท่ากับตรงที่แก้ จะทำงาน */
                data[id] = $("#edit-" + i + " input").val(); /* ให้เปลี่ยนค่าใน edit-i */
            }
            html += `
            <div id="${i}" class="items">
                <p>${data[i]}</p>
                <div class="btn-control">
                    <div onclick="edit(${i})" class="btn-edit">แก้ไข</div>
                    <div onclick="del(${i})" class="btn-delete">ลบ</div>
                </div>
            </div>
        `;
        }
        $("#items-control").html(html); /* แสดงผลลัพธ์ */
    }


