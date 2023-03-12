import Layout from "../components/Layout";

const factory = () => {
  return (
    <Layout>
      <div className="text-center mt-4">
        <p className="factoryText">
          تم اختيار اسم belle بناءا على معناه وهو الحسناء باللغة اللاتينية وفي
          اللغة العربية معناه وعاء المسك{" "}
        </p>

        <p className="factoryText">
          وهي ماركة مسجلة من مصنع عجائن الشرق الأوسط الفاخرة للصناعة [فلمبي ] ,
        </p>
        <p className="factoryText">
          {" "}
          وهي منتج غذائي عجينة سمبوسة خام يمكن تناولها عن طريق إعدادها بحشوها
          بأي مكون حسب الرغبة
        </p>

        <p className="factoryText">
          {" "}
          ثم يتم طهيه بالقلي بالزيت أو بالفرن أو بالقلاية الهوائية{" "}
        </p>
      </div>
    </Layout>
  );
};

export default factory;
