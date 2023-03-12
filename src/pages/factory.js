import Layout from "../components/Layout";

const factory = () => {
  return (
    <Layout>
      <div className="text-center mt-4">
        <p className="factoryText">
          تم تجهيز مصنع متكامل في واحدة مدن- بمدينة جدة بالمملكة العربية
          السعودية
        </p>

        <p className="factoryText">
          {" "}
          تم تصميمه على أحدث المواصفات والمعايير المعمول بها
        </p>
        <p className="factoryText">
          يحتوي على خطوط انتاج متعددة لعدة منتجات غذائية متنوعة
        </p>
      </div>
    </Layout>
  );
};

export default factory;
