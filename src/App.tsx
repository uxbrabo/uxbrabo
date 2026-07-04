import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { Navbar } from '@/components/layout/Navbar'
import { HomePage } from '@/pages/HomePage'
import { WorkPage } from '@/pages/WorkPage'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { CucaCaseStudy } from '@/pages/work/CucaCaseStudy'
import { VemCaseStudy } from '@/pages/work/VemCaseStudy'
import { PlazaCaseStudy } from '@/pages/work/PlazaCaseStudy'
import { VenosanCaseStudy } from '@/pages/work/VenosanCaseStudy'
import { AcademiaMouraCaseStudy } from '@/pages/work/AcademiaMouraCaseStudy'
import { SabenPayPage } from '@/pages/work/SabenPayPage'
import { CorujaGrantPage } from '@/pages/work/CorujaGrantPage'
import { BellyrisiPage } from '@/pages/work/BellyrisiPage'
import { RosarinhoPage } from '@/pages/work/RosarinhoPage'
import { OabPeCaseStudy } from '@/pages/work/OabPeCaseStudy'
import { StudyCaseStudy } from '@/pages/work/StudyCaseStudy'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { useScrollToTop } from '@/hooks/useScrollToTop'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25 } },
}

function AnimatedPage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}

export function App() {
  const location = useLocation()
  useScrollToTop()

  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <AnimatedPage>
                <HomePage />
              </AnimatedPage>
            }
          />
          <Route
            path="/trabalho"
            element={
              <AnimatedPage>
                <WorkPage />
              </AnimatedPage>
            }
          />
          <Route
            path="/sobre"
            element={
              <AnimatedPage>
                <AboutPage />
              </AnimatedPage>
            }
          />
          <Route
            path="/contato"
            element={
              <AnimatedPage>
                <ContactPage />
              </AnimatedPage>
            }
          />
          <Route
            path="/trabalho/cuca"
            element={
              <AnimatedPage>
                <CucaCaseStudy />
              </AnimatedPage>
            }
          />
          <Route
            path="/trabalho/vem"
            element={
              <AnimatedPage>
                <VemCaseStudy />
              </AnimatedPage>
            }
          />
          <Route
            path="/trabalho/academia-moura"
            element={
              <AnimatedPage>
                <AcademiaMouraCaseStudy />
              </AnimatedPage>
            }
          />
          <Route
            path="/trabalho/venosan"
            element={
              <AnimatedPage>
                <VenosanCaseStudy />
              </AnimatedPage>
            }
          />
          <Route
            path="/trabalho/shopping-plaza"
            element={
              <AnimatedPage>
                <PlazaCaseStudy />
              </AnimatedPage>
            }
          />
          <Route
            path="/arte/saben-pay"
            element={
              <AnimatedPage>
                <SabenPayPage />
              </AnimatedPage>
            }
          />
          <Route
            path="/arte/rosarinho"
            element={
              <AnimatedPage>
                <RosarinhoPage />
              </AnimatedPage>
            }
          />
          <Route
            path="/arte/bellyrisi"
            element={
              <AnimatedPage>
                <BellyrisiPage />
              </AnimatedPage>
            }
          />
          <Route
            path="/arte/coruja-grant"
            element={
              <AnimatedPage>
                <CorujaGrantPage />
              </AnimatedPage>
            }
          />
          <Route
            path="/trabalho/oab-pe"
            element={
              <AnimatedPage>
                <OabPeCaseStudy />
              </AnimatedPage>
            }
          />
          <Route
            path="/trabalho/study"
            element={
              <AnimatedPage>
                <StudyCaseStudy />
              </AnimatedPage>
            }
          />
          <Route
            path="*"
            element={
              <AnimatedPage>
                <NotFoundPage />
              </AnimatedPage>
            }
          />
        </Routes>
      </AnimatePresence>
    </MotionConfig>
  )
}
