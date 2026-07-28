import StepLayout from "./StepLayout";
import SectionHeader from "./SectionHeader";
import ScoreCard from "./ScoreCard";

export default function BusinessGrowthStep({
    formData,
    handleChange,
}) {

    return (

        <StepLayout>

            <SectionHeader

                badge="Business Growth"

                title="Measure Your Company's Growth Performance"

                description="These questions help identify hidden revenue opportunities, sales consistency, and growth potential."

                tip="Think about the last 12 months—not just your busiest season."

            />

            <ScoreCard

                label="Revenue Growth"

                description="How consistently has your business grown over the past year?"

                name="revenueGrowth"

                value={formData.revenueGrowth}

                onChange={handleChange}

            />

            <ScoreCard

                label="New Customer Growth"

                description="How effectively are you attracting new customers?"

                name="newCustomers"

                value={formData.newCustomers}

                onChange={handleChange}

            />

            <ScoreCard

                label="Lead Follow-Up"

                description="How well does your business follow up with every lead?"

                name="followUp"

                value={formData.followUp}

                onChange={handleChange}

            />

            <ScoreCard

                label="Customer Retention"

                description="How successful are you at keeping existing customers?"

                name="retention"

                value={formData.retention}

                onChange={handleChange}

            />

            <ScoreCard

                label="Referral Generation"

                description="How often do existing customers refer new business?"

                name="referrals"

                value={formData.referrals}

                onChange={handleChange}

            />

            <ScoreCard

                label="Sales Process"

                description="How consistent is your sales process from lead to close?"

                name="salesProcess"

                value={formData.salesProcess}

                onChange={handleChange}

            />

        </StepLayout>

    );

}