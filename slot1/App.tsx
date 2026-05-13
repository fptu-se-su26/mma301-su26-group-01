import { SafeAreaView, ScrollView } from "react-native";

import Header from "./src/components/Header";
import LoginCard from "./src/components/LoginCard";
import Footer from "./src/components/Footer";

import { styles } from "./src/styles";
import WelcomeSection from "./src/components/WelcomeSection";

export default function App() {
  return (
    <SafeAreaView         style={styles.app}>
      <Header />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <WelcomeSection/>
        <LoginCard />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}