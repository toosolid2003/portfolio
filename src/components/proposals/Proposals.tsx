import { getPosts } from '@/app/utils/utils';
import { Grid } from '@/once-ui/components';
import Proposal from './Proposal';

interface ProposalsProps {
    range?: [number] | [number, number];
    columns?: '1' | '2' | '3';
    thumbnail?: boolean;
    direction?: 'row' | 'column';
}

export function Proposals({
    range,
    columns = '1',
    thumbnail = false,
    direction
}: ProposalsProps) {
    let allProposals = getPosts(['src', 'app', 'proposals', 'proposals']);

    const sortedProposals = allProposals.sort((a, b) => {
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    const displayedProposals = range
        ? sortedProposals.slice(
              range[0] - 1,
              range.length === 2 ? range[1] : sortedProposals.length
          )
        : sortedProposals;

    return (
        <>
            {displayedProposals.length > 0 && (
                <Grid
                    columns={columns} mobileColumns="1"
                    fillWidth marginBottom="40" gap="12">
                    {displayedProposals.map((proposal) => (
                        <Proposal
                            key={proposal.slug}
                            proposal={proposal}
                            thumbnail={thumbnail}
                            direction={direction}
                        />
                    ))}
                </Grid>
            )}
        </>
    );
}
