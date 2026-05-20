import React from "react";

import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import {
  Search,
  User,
  Soup,
  Coffee,
  Fish,
  Pizza,
  Hamburger,
  ArrowLeft,
} from "lucide-react-native";

import { landingStyles as styles } from "../styles/landingStyles";
import { colors } from "../styles/colors";

type LandingScreenProps = {
  onBack: () => void;
};

export default function LandingScreen({
  onBack,
}: LandingScreenProps) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={onBack}
          >
            <ArrowLeft size={28} color={colors.white} />
          </TouchableOpacity>

          <View style={styles.searchBox}>
            <Search size={22} color={colors.orange} />

            <TextInput
              placeholder="Tìm kiếm món ăn"
              placeholderTextColor={colors.placeholder}
              style={styles.searchInput}
            />
          </View>

          <User size={30} color={colors.white} />
        </View>

        <Text style={styles.sectionTitle}>Mua ngay</Text>

        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd",
          }}
          style={styles.banner}
          imageStyle={styles.bannerImage}
        >
          <Text style={styles.bannerSmall}>
            TÊN MÓN ĂN
          </Text>

          <Text style={styles.bannerTitle}>
            Giảm 70%
          </Text>

          <View style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>
              Xem ngay
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.categoryRow}>
          <Category
            icon={<Soup size={30} color={colors.white} />}
            title="Cơm"
          />

          <Category
            icon={<Soup size={30} color={colors.white} />}
            title={"Bún - Phở\n- Cháo"}
          />

          <Category
            icon={<Fish size={30} color={colors.white} />}
            title="Hải sản"
          />

          <Category
            icon={<Coffee size={30} color={colors.white} />}
            title="Coffee"
          />

          <Category
            icon={<Pizza size={30} color={colors.white} />}
            title="Đồ ăn nhẹ"
          />

          <Category
            icon={<Hamburger size={30} color={colors.white} />}
            title={"Đồ ăn\nNhanh"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

type CategoryProps = {
  icon: React.ReactNode;
  title: string;
};

function Category({
  icon,
  title,
}: CategoryProps) {
  return (
    <View style={styles.categoryItem}>
      <View style={styles.categoryIcon}>
        {icon}
      </View>

      <Text style={styles.categoryText}>
        {title}
      </Text>
    </View>
  );
}